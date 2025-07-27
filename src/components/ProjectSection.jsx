import { ExternalLink, Github } from "lucide-react"

const proj = [
    {
        id: 1,
        title: "Leave Tracking System",
        description: "A Web Application that allows the HRMO to track employees leave and travel order",
        image: "/projects/project-1.png",
        tags: ["HTML", "CSS", "Bootstrap", "PHP", "Javascript", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 2,
        title: "Document Management System",
        description: "A Web Application that allows the Sangguniang Bayan Office to track Resolutions and Municipal Orders",
        image: "/projects/project-2.png",
        tags: ["HTML", "CSS", "Bootstrap", "PHP", "Javascript", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },

        {
        id: 3,
        title: "CNSC Garments Inventory System",
        description: "An application that monitors the inventory of the CNSC Garments",
        image: "/projects/project-3.png",
        tags: ["Vb.net", "MySQL"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 4,
        title: "PillSpenser: IOT Based Medicine Dispenser",
        description: "An IOT device that dispenses medicine based on the patient's prescription",
        image: "/projects/project-4.png",
        tags: ["Arduino", "C++"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 5,
        title: "Crash Detection Device",
        description: "An IOT device that detects car crashes and alerts emergency services",
        image: "/projects/project-5.png",
        tags: ["Arduino", "C++"],
        demoUrl: "#",
        githubUrl: "#",
    },

    {
        id: 6,
        title: "Wire Cutter Machine",
        description: "A device that automates the wire cutting process",
        image: "/projects/project-6.png",
        tags: ["Arduino", "C++"],
        demoUrl: "#",
        githubUrl: "#",
    }

]

export const ProjectSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured Projects</h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">Here are some of my recent projects. Each project was carefully 
                crafted with attention to detail, client-based, performance and user-experience</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {proj.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg border overflow-hidden shadow-xs card-hover">
                        <div className="h-38 overflow-hidden">
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>

                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tags) => (
                                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary/10 text-secondary-foreground">{tags}</span>
                                ))}
                            </div>

                            <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            {/* <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <ExternalLink size={20} />
                                    </a>
                                    <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                    >
                                    <Github size={20} />
                                    </a>
                                </div>
                            </div> */}
                        </div>

                       
                    </div>
                ))}
            </div>

        </div>

    </section>
}