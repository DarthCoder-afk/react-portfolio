import { ArrowDown } from "lucide-react"
import TextType from "./TextType"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">
              
                <motion.img
                src="./profile/formal.JPG" 
                alt="Sean Michael Borje"
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }} 
                className="mx-auto rounded-full w-60 h-60 object-cover border-3 border-[#343a40] shadow-lg mb-4 "
                />
             
                <motion.h1 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-2xl md:text-5xl font-bold text-primary tracking-light">
                    <span>
                        <TextType 
                            text={["Hey there!", "I'm Sean, your next dev!", "Let's build something amazing!"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </span>
                </motion.h1>
                <motion.p 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-md md:text-xl text-muted-foreground max-2-2xl mx-auto">
                    I’m a passionate software developer who loves turning ideas into interactive experiences.
                    From front-end design to back-end logic, I build tools that make a difference 🧑‍💻💻
                </motion.p>

            </div>

            <motion.div 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-8">
                <a href="#projects" className="cosmic-button">
                    Explore My Work
                </a>
            </motion.div>

        </div>

        <motion.div 
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <a href="#about"><span className="text-sm text-muted-foreground mb-2">Scroll</span></a>
            <ArrowDown className="h-5 w-5 text-primary" />
        </motion.div>

    </section>
}