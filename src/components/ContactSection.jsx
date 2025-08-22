import { Mail, MapPin, Github, Linkedin, Instagram, Facebook, SendIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import emailjs from "@emailjs/browser";
import { useRef, useState} from "react";
import { useToast } from "@/hooks/use-toast"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";


export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState();
    const form = useRef();

    const SendEmail = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        emailjs.sendForm( import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY).then(
            (result) => {
                toast({
                    title: "Message Sent Successfuly",
                    description: "Thank you for the message. I'll get back to you as soon as possible.",                    
                })
                setIsSubmitting(false);
                form.current.reset();
            },
            (error) => {
                toast({
                    title: "Message Failed to Send",
                    description: "Please try again later.",
                    });
                setIsSubmitting(false);
            }
        )
    }
    return <section id="contact" className="py-24 px-4 relative scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-3xl md:text-4xl font-bold mb-4 text-center">Get In Touch</motion.h2>

            <motion.p 
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">If you have a project in mind or are interested in collaboration, 
                please don’t hesitate to get in touch. I am always open to exploring new opportunities and professional engagements.</motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <motion.div 
                variants={fadeIn('right', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }} 
                className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">

                        <div className="flex flex-items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Facebook className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="items-center my-auto">
                                <a href="https://www.facebook.com/seanmichael.borje.7/" className="text-muted-foreground">Sean Michael Borje</a>
                            </div>
                        </div>
                        
                        <div className="flex flex-items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="items-center my-auto">
                                <a href="mailto:seanmichaelborje179@gmail.com" className="text-muted-foreground">seanmichaelborje179@gmail.com</a>
                            </div>
                        </div>

                        <div className="flex flex-items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="items-center my-auto">
                                <a className="text-muted-foreground">Manila, Philippines</a>
                            </div>
                        </div>

                        
                    </div>           
                </motion.div>

                <motion.div 
                variants={fadeIn('left', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }} 
                className="bg-card p-8 border border-[#dee2e6] rounded-lg drop-shadow-lg">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form action="" ref={form} onSubmit={SendEmail} className="space-y-6">
                      <div className="relative">
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="peer w-full px-4 pt-5 pb-2 rounded-md border border-input bg-card 
                                        focus:outline-hidden focus:ring-2 focus:ring-primary 
                                        placeholder-transparent"
                                placeholder=" "
                            />

                            <label
                                htmlFor="name"
                                className="absolute left-4 top-3 text-gray-500 transition-all duration-200 
                                        peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                                        peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#212529] 
                                        peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#212529]
                                        bg-card px-1"
                            >
                                Full Name
                            </label>
                        </div>

                        <div className="relative">
                            <input type="email"
                            id="email"
                            name="email"
                            required
                            className="peer w-full px-4 pt-5 pb-2 rounded-md border border-input bg-card 
                                        focus:outline-hidden focus:ring-2 focus:ring-primary 
                                        placeholder-transparent"
                            placeholder=" " />
                            <label htmlFor="email" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 
                            peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                            peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#212529] 
                            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#212529]
                            bg-card px-1">Email </label>
                           
                        </div>

                         <div className="relative">
                            <input type="text"
                            id="subject"
                            name="subject"
                            required
                            className="peer w-full px-4 pt-5 pb-2 rounded-md border border-input bg-card 
                                        focus:outline-hidden focus:ring-2 focus:ring-primary 
                                        placeholder-transparent"
                            placeholder=" " />
                            <label htmlFor="subject" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 
                            peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                            peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#212529] 
                            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#212529]
                            bg-card px-1">Subject</label>
    
                        </div>

                        <div className="relative">
                            <textarea 
                            id="message"
                            name="message"
                            required
                            className="peer w-full px-4 pt-5 pb-2 rounded-md border border-input bg-card 
                                        focus:outline-hidden focus:ring-2 focus:ring-primary 
                                        placeholder-transparent"
                            placeholder=" " />
                            <label htmlFor="message" className="absolute left-4 top-3 text-gray-500 transition-all duration-200 
                            peer-placeholder-shown:top-5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                            peer-focus:-top-2 peer-focus:text-sm peer-focus:text-[#212529] 
                            peer-[&:not(:placeholder-shown)]:-top-2 peer-[&:not(:placeholder-shown)]:text-sm peer-[&:not(:placeholder-shown)]:text-[#212529]
                            bg-card px-1">Message </label>
                        </div>

                        <button
                        type="submit"
                        disabled={isSubmitting}
                        className="relative w-full flex items-center justify-center gap-2 bg-[#212529] px-5 py-3 text-sm md:text-base rounded-full border border-[#212529] font-semibold overflow-hidden group cursor-pointer"
                        >
                            {/* Text */}
                            <span className="relative z-10 text-[#f8f9fa] transition-colors duration-500 group-hover:text-[#212529] flex items-center gap-2">
                                <SendIcon size={16} />
                                {isSubmitting ? "Sending..." : "Send Message"}
                            </span>

                            {/* Liquid fill effect */}
                            <span className="absolute inset-0 bg-[#f8f9fa] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                            </button>
                    </form>
                </motion.div>

            </div>
        </div>
</section>
}