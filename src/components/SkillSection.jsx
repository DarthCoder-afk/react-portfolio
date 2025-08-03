import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {motion} from "framer-motion"
import { fadeIn } from "../variants";


const skills = [
  // Web Development
  { name: "HTML", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", category: "web-development" },
  { name: "CSS", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" , category: "web-development" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" , category: "web-development" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" , category: "web-development" },
  { name: "Bootstap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" , category: "web-development" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "web-development" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", category: "web-development" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", category: "web-development" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", category: "web-development" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg", category: "web-development" },

  // Programming Languages
  { name: "Python", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original-wordmark.svg", category: "programming languages" },
  { name: "Java", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original-wordmark.svg", category: "programming languages" },
  { name: "C++", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg", category: "programming languages" },
  { name: "Vb.net", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/visualbasic/visualbasic-original.svg", category: "programming languages" },

  //Productivity Tools
  { name: "Microsoft Word", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg", category: "productivity tools" },
  { name: "Microsoft Excel", img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", category: "productivity tools" },
  { name: "Adobe Premeire Pro", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg", category: "productivity tools" },
  { name: "Adobe After Effects", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg", category: "productivity tools" },

  // Dev Tools
  { name: "Git/GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", category: "dev tools" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg", category: "dev tools" },
  { name: "PyCharm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original-wordmark.svg", category: "dev tools" },
  { name: "Android Studio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg", category: "dev tools" },
   { name: "Arduino IDE", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original-wordmark.svg", category: "dev tools" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "dev tools" },
  { name: "3Ds Max", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg", category: "dev tools" },
  { name: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg", category: "dev tools" },
  { name: "Unreal Engine", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg", category: "dev tools" },

];

const categories = ["all", "web-development", "programming languages", "dev tools", "productivity tools"];

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSKills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <motion.h2
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-3xl md:text-4xl font-bold mb-4 text-center"><span className="text-primary">Skills</span></motion.h2>

            <motion.p 
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">These are the technologies I have worked with and become familiar with</motion.p>

            <motion.div 
            variants={fadeIn('right', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category, key) => (
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary")} onClick={() => setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </motion.div>
        
        </div>

        <motion.div 
        key={activeCategory}
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: true, amount: 0.3 }} 
        className="grid grid-cols-3 lg:grid-cols-4 gap-4 px-4 place-items-center max-w-6xl mx-auto">
            {filteredSKills.map((skill, key) => (
                <motion.div 
                variants={fadeIn('up', 0.2)}
                initial="hidden"
                animate={"show"}
                key={key} className="w-20 h-20 md:w-32 h-32 flex items-center justify-center">
                    <img src={skill.img} alt={skill.name} className="max-h-full max-w-full object-contain hover:scale-110 transition-transform animation=['animate-[drop-in_0.5s]', 'animate-[drop-out_0.5s]']" title={skill.name} />
                </motion.div>
            ))}
        </motion.div>
        
    </section>
}