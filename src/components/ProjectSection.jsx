import { ExternalLink, Github } from "lucide-react"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";

const proj = [
    {
        id: 1,
        title: "Leave Tracking System",
        description: "A Web Application that allows the HRMO to track employees leave and travel order",
        image: "/projects/project-1.png",
        tags: ["HTML", "CSS", "Bootstrap", "PHP", "Javascript", "MySQL"],
        demoUrl: "#",
        role: "Development & Design",
        year: "2025",
        bg: "bg-[#52b788]",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Document Management System",
        description: "A Web Application that allows the Sangguniang Bayan Office to track Resolutions and Municipal Orders",
        image: "/projects/project-2.png",
        tags: ["HTML", "CSS", "Bootstrap", "PHP", "Javascript", "MySQL"],
        bg: "bg-[#80ed99]",
        year: "2025",
        demoUrl: "#",
        githubUrl: "#",
    },


    {
        id: 3,
        title: "Crash Detection Device",
        description: "An IOT device that detects car crashes and alerts emergency services",
        image: "/projects/project-3.png",
        tags: ["Arduino", "C++"],
        bg: "bg-[#adb5bd]",
        year: "2025",
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 4,
        title: "Case Study: BikeShare",
        description: "A case study that I made for my Google Data Analytics Professional Certificate",
        image: "/projects/project-4.png",
        tags: ["R", "SQL", "Excel", "Tableau"],
        year: "2025",
        bg: "bg-[#e39695]",
        demoUrl: "#",
        githubUrl: "#",
    },



]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative scroll-mt-24">
        <div className="container mx-auto max-w-5xl">
            <motion.h2 
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</motion.h2>

            <motion.p 
            variants={fadeIn('left', 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: true, amount: 0.3 }} 
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully
                crafted with attention to detail, client-based, performance and user-experience</motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 group">
                {proj.map((project) => (
                    <motion.div
                    key={project.id}
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.3 }}
                    className="flex flex-col transition-all duration-300 
                    group-hover:blur-xs hover:blur-none"
                    >
                    {/* Colored background container */}
                    <div
                        className={`w-full h-[300px] rounded-xl ${project.bg} flex items-center justify-center`}
                    >
                        <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-xl shadow-lg w-[90%] sm:w-[80%] md:w-[90%] transition duration-300 ease-in-out hover:scale-103"
                        />
                    </div>

                    {/* Text section */}
                   <div className="mt-4 text-sm text-muted-foreground">
                        <div className="flex justify-between items-start mb-1">
                        <h3 className="text-lg font-semibold text-foreground">
                            {project.title}
                        </h3>
                        <p>{project.year}</p>
                        </div>
                        {/* <p className="mb-1">{project.role}</p> */}
                        <p className="text-xs leading-relaxed">{project.description}</p>
                    </div>
                    </motion.div>
                ))}
            </div>

            <motion.div
                    variants={fadeIn("up", 0.2)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mt-12"
                    >
                        <a
                            href="https://github.com/DarthCoder-afk"
                            className="relative bg-[#f8f9fa] inline-block px-6 py-3 text-sm md:text-base rounded-full border border-[#212529] font-semibold overflow-hidden group"
                        >
                            {/* Text */}
                            <span className="relative z-10 text-primary transition-colors duration-500 group-hover:text-[#f8f9fa]">
                            View All Projects
                            </span>

                            {/* Liquid fill effect */}
                            <span className="absolute inset-0 bg-[#212529] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></span>
                        </a>
             </motion.div>

        </div>

    </section>
}