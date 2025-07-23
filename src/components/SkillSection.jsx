import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

const skills = [
  // Web Development
  { name: "HTML", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", category: "frontend" },
  { name: "CSS", img:"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" , category: "frontend" },
  { name: "JavaScript", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" , category: "frontend" },
  { name: "React", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" , category: "frontend" },
  { name: "Bootstap", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" , category: "frontend" },
  { name: "Tailwind CSS", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", category: "frontend" },
  { name: "Node.js", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", category: "backend" },
  { name: "PHP", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg", category: "backend" },
  { name: "MySQL", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original-wordmark.svg", category: "backend" },
  { name: "Firebase", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-plain-wordmark.svg", category: "backend" },

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
  { name: "Figma", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg", category: "dev tools" },
  { name: "3Ds Max", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/threedsmax/threedsmax-original.svg", category: "dev tools" },
  { name: "Blender", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/blender/blender-original-wordmark.svg", category: "dev tools" },
  { name: "Unreal Engine", img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/unrealengine/unrealengine-original-wordmark.svg", category: "dev tools" },

];

const categories = ["all", "frontend", "backend", "programming languages", "dev tools", "productivity tools"];

export const SkillSection = () => {

    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSKills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return <section id="skills" className="py-21 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My <span className="text-primary">Skills</span></h2>

             <p className="text-lg md:text-lg text-muted-foreground max-2-2xl mx-auto mb-10">
                   There are the technologies that I have used and familiar with.                 
                </p>
        
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {categories.map((category, key) => (
                    <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                        activeCategory == category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover: bg-secondary")} onClick={() => setActiveCategory(category)}>
                        {category}
                    </button>
                ))}
            </div>
        
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-4 gap-5 px-7 place-items-center">
            {filteredSKills.map((skill, key) => (
                <div key={key} className="w-20 h-20 flex items-center justify-center ">
                    <img src={skill.img} alt={skill.name} className="max-h-full max-w-full object-contain hover:scale-110 transition-transform" title={skill.name} />
                </div>
            ))}
        </div>
        
    </section>
}