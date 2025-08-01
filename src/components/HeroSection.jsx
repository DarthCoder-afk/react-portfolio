import { ArrowDown, ChevronDownIcon } from "lucide-react"
import TextType from "./TextType"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";


export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">

                <motion.div className="relative w-80 h-80 mx-auto mb-7"
                      variants={fadeIn('down', 1)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{ once: true, amount: 0.1 }}>
                    {/* SVG blob background */}
                    <svg
                        viewBox="0 0 900 600"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute w-full h-full scale-[1.887] -bottom-4.5 -right-0 z-0"
                  
                    >
                        <g transform="translate(434.40364239102655 239.21740799878174)">
                        <path
                          d="M225.7 -42.1C262.4 39.7 241.4 171.6 160.6 233.2C79.7 294.8 -60.9 286.1 -137.9 222.5C-214.9 158.8 -228.2 40.2 -194.6 -37.3C-161 -114.8 -80.5 -151.2 7 -153.4C94.5 -155.7 188.9 -123.9 225.7 -42.1" fill="#212529"
                        />
                        </g>
                    </svg>
                     <img
                        src="./profile/formal.png" 
                        alt="Sean Michael Borje"
                        className="relative rounded-full w-full h-full object-cover z-10 drop-shadow-xl"
                        />
                </motion.div>
              
               
             
                <motion.h1 
                variants={fadeIn('up', 1)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-3xl md:text-5xl font-bold text-primary tracking-light ">
                    <motion.div>
                        <TextType 
                            text={["Hey there!", "I'm Sean, your next dev!", "Let's build something amazing!"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </motion.div>
                </motion.h1>
                <motion.p 
                variants={fadeIn('up', 2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="text-md md:text-xl text-muted-foreground max-w-2xl mx-auto">
                    I’m a passionate software developer who loves turning ideas into interactive experiences.
                    From front-end design to back-end logic, I build tools that make a difference 🧑‍💻💻
                </motion.p>

            </div>

            <div className="flex flex-row flex-wrap gap-4 pt-4 justify-center items-center">
                <motion.div 
                variants={fadeIn('up', 3)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-8">
                    <a href="#projects" className="cosmic-button px-5 py-3 text-sm md:text-base rounded-full bg-primary text-white font-semibold transition-colors duration-300">
                        Explore My Work
                    </a>
                </motion.div>

                <motion.div 
                variants={fadeIn('up', 4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}
                className="mt-8">
                    <a href="#contacts" className="px-5 py-3 text-sm md:text-base rounded-full bg-[#f8f9fa] border border-primary text-primary font-semibold hover:shadow-[0_0_10px_rgba(206,212,218,1)] transition-colors duration-300 ">
                        Connect With Me
                    </a>
                </motion.div>
            </div>

           

        </div>

        <motion.div 
        variants={fadeIn('up', 6)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <a href="#about"><span className="text-sm text-muted-foreground mb-2">See More</span></a>
            <ChevronDownIcon className="h-5 w-5 text-primary" />
        </motion.div>

    </section>
}