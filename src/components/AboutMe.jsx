import { Briefcase, Code, MapPin, User } from "lucide-react"
import Stack from "./Stack"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";

const images = [
  { id: 1, img: "./stacks/balatik.JPG" },
  { id: 2, img: "./stacks/toga.JPG" },
  { id: 3, img: "./stacks/formal.JPG" }
];

export const AboutMe = () => {
    return <section id="about" className="py-25 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <motion.div
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3 }}>
                      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                            Get To Know <span className="text-primary">Me</span>
                      </h2>

            </motion.div>
          

           <div className="grid grid-cols-1 md:grid-cols-2 gap-12 flex-items-center">
                <motion.div 
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                    className="order-2 md:order-1">
                    
                    <div className="bg-white border border-gray-200 rounded-lg drop-shadow-md overflow-hidden max-w-2xl">
                        {/* MacOS window controls - card header */}
                        <div className="flex items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
                            <span className="w-3 h-3 rounded-full bg-red-500 mr-2"></span>
                            <span className="w-3 h-3 rounded-full bg-yellow-400 mr-2"></span>
                            <span className="w-3 h-3 rounded-full bg-green-500"></span>
                        </div>

                        {/* Content section - card body */}
                        <div className="px-6 py-6 bg-white text-justify">
                            <br />
                            <span className="inline-block">Hi :) </span>
                            <br />
                            <br />
                            👋 I'm Sean and I am an aspiring software developer with a passion for building software solutions tailored to user or client needs. 
                            Whether it's a web application, desktop system, or mobile app, I focus on creating functional and user-friendly experiences 👨‍💻.
                            <br /><br />
                            I enjoy turning ideas into working products and continuously aim to improve my skills and contribute to 
                            real-world projects. I am currently open for work and excited to join a team where I can grow and make an impact 🌏.

                         
                        </div>
                    </div>           
                </motion.div>

                <motion.div 
                    variants={fadeIn('left', 0.4)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                    className="order-1 ml-3 md:order-2 grid grid-cols-1 gap-6 md:flex justify-items-center mb-1">

                    <Stack
                        randomRotation={true}
                        sensitivity={120}
                        sendToBackOnClick={true}
                        cardDimensions={{ width: 300, height: 400 }}
                        cardsData={images}/>

                </motion.div>
            </div>
        </div>
    </section>
}