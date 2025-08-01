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
    return <section id="contact" className="py-24 px-4 relative">
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
                                <a href="mailto:seanmichaelborje179@gmail.com" className="text-muted-foreground">Sean Michael Borje</a>
                            </div>
                        </div>
                        
                        <div className="flex flex-items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="w-6 h-6 text-primary"/>
                            </div>
                            <div className="items-center my-auto">
                                <a className="text-muted-foreground">seanmichaelborje179@gmail.com</a>
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
                className="bg-card p-8 rounded-lg shadow-xs">
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                    <form action="" ref={form} onSubmit={SendEmail} className="space-y-6">
                        <div className="flex items-center space-x-4">
                            <label htmlFor="name" className="w-1/4 text-md font-medium mb-2">Name: </label>
                            <input type="text"
                            id="name"
                            name="name"
                            required
                            className="w-3/4 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Juan Dela Cruz..." />
                        </div>

                        <div className="flex items-center space-x-4">
                            <label htmlFor="email" className="w-1/4 text-md font-medium mb-2">Email: </label>
                            <input type="email"
                            id="email"
                            name="email"
                            required
                            className="w-3/4 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="juandelacruz@gmail.com" />
                        </div>

                         <div className="flex items-center space-x-4">
                            <label htmlFor="subject" className="w-1/4 text-md font-medium mb-2">Subject: </label>
                            <input type="text"
                            id="subject"
                            name="subject"
                            required
                            className="w-3/4 px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Job Offer, Project Work, Inquiry" />
                        </div>

                        <div className="flex items-start space-x-4">
                            <label htmlFor="message" className="w-1/4 text-md font-medium mb-2 pt-2">Message: </label>
                            <textarea 
                            id="message"
                            name="message"
                            required
                            className="w-3/4 min-h-[120px] px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                            placeholder="Hello, I'd like to talk about..." />
                        </div>

                        <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                           
                            <SendIcon size={16}/>  {isSubmitting ? "Sending..." : "Send Message"}
                        </button>
                    </form>
                </motion.div>

            </div>
        </div>
</section>
}