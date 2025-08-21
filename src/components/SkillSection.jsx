import { useState, useEffect } from "react";
import {motion, AnimatePresence } from "framer-motion"
import { fadeIn } from "../variants";
import LogoLoop from './LogoLoop';
import * as Accordion from "@radix-ui/react-accordion"
import { AppWindow, Code, MonitorCog } from "lucide-react" 
import { AccordionItem } from "./ui/AccordionItem";


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
  { name: "Arduino", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/arduino/arduino-original.svg", category: "programming languages" },
  { name: "R Programming", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/r/r-original.svg", category: "programming languages" },
  { name: "SQL", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg", category: "programming languages" },
  { name: "Microsoft Excel", img: "https://upload.wikimedia.org/wikipedia/commons/3/34/Microsoft_Office_Excel_%282019%E2%80%93present%29.svg", category: "programming languages" },
  { name: "Tableau", img: "https://upload.wikimedia.org/wikipedia/commons/3/32/Tableau_image.png", category: "programming languages" },

  //Productivity Tools

  // Dev Tools
  { name: "GitHub", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original-wordmark.svg", category: "tools" },
  { name: "Git", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", category: "tools" },
  { name: "VS Code", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original-wordmark.svg", category: "tools" },
  { name: "PyCharm", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pycharm/pycharm-original-wordmark.svg", category: "tools" },
  { name: "Android Studio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original-wordmark.svg", category: "tools" },
  { name: "R Studio", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rstudio/rstudio-original.svg", category: "tools" },
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "tools" },
  { name: "3Ds Max", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg", category: "tools" },
  { name: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg", category: "tools" },
  { name: "Unreal Engine", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg", category: "tools" },
  { name: "Microsoft Word", img: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Microsoft_Office_Word_%282019%E2%80%93present%29.svg", category: "tools" },
  { name: "Adobe Premiere Pro", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/premierepro/premierepro-original.svg", category: "tools" },
  { name: "Adobe After Effects", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/aftereffects/aftereffects-original.svg", category: "tools" },


];


const images = {
    "default": "./skills/default.jpg",
    "item-1": "./skills/Webdev.png",
    "item-2": "./skills/data_analyst.jpg",
    "item-3": "./skills/tools.png",

};

const categoryMap = {
    "default": "all",
    "item-1": "web-development",
    "item-2": "programming languages", 
    "item-3": "tools",
};

export const SkillSection = () => {

    
    const [selected, setSelected] = useState("default");
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSKills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

     // transform to LogoLoop format
    const logoData = filteredSKills.map((skill) => ({
       node: (
            <div className="flex items-center gap-1 border rounded-full bg-white p-3 shadow">
                <img
                    src={skill.img}
                    alt={skill.name}
                    className="h-[var(--logoloop-logoHeight)] w-auto object-contain"
                    draggable={false}
                />
                <span className="text-sm md:text-md font-semibold text-[#212529]">{skill.name}</span>
            </div>
        ),
        ariaLabel: skill.name,
    }));

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
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Technologies, tools, and frameworks I use to design and build applications.</motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-items-center">

                <div className="w-full">
                    <Accordion.Root type="single" collapsible className="space-y-4 max-w-md bg-[#f8f9fa]"  value={selected}
                        onValueChange={(val) => {
                        setSelected(val || "default"); // clears when closed
                        setActiveCategory(val ? categoryMap[val] : "all"); // sync with skills
                    }}>
                            <AccordionItem value="item-1" title="Web Development" icon={<AppWindow size={20} />}>
                               I build responsive web applications using HTML, CSS, JavaScript, and React. 
                                Experienced with Node.js, PHP, MySQL, Firebase, and modern frameworks like Tailwind and Bootstrap.
                            </AccordionItem>

                            <AccordionItem value="item-2" title="Programming and Data Analysis" icon={<Code size={20} />}>
                                Skilled in Python, R, SQL, Tableau, and Excel for data analysis and automation. 
                                Also experienced in Arduino programming and IOT development.
                            </AccordionItem>

                            <AccordionItem value="item-3" title="Other Tools" icon={<MonitorCog size={20} />}>
                                Proficient with Git/GitHub, VS Code, Rstudio, PyCharm, Figma, Blender, 3Ds Max, 
                             Unreal Engine, Microsoft Office, and Adobe Suite (Premiere Pro, After Effects).
                            </AccordionItem>
                    </Accordion.Root>
                </div>

               {/* Image that changes */}
                <div className="flex justify-center items-center">
                    <AnimatePresence mode="wait">
                    {selected && (
                        <motion.div
                            key={selected || "default"}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                            className="h-80 w-auto flex items-center justify-center"
                        >
                            <img
                            src={images[selected || "default"]}
                            alt={selected || "default"}
                            loading="lazy"
                            className="max-h-full max-w-full object-contain rounded-xl shadow-md transition duration-300 ease-in-out hover:scale-103"
                            />
                        </motion.div>
                    )}
                    </AnimatePresence>
                </div>

            </div>

          
        </div>

        <div className="h-200px relative overflow-hidden">
            <LogoLoop
            logos={logoData}
            speed={70}
            direction="left"
            logoHeight={30}
            gap={50}
            fadeOut
            scaleOnHover
            ariaLabel="Skill logos"
            className="my-12 max-w-5xl mx-auto"
            />
        </div>
        
    </section>
}

