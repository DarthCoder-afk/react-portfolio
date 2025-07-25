import { Briefcase, Code, MapPin, User } from "lucide-react"
import Stack from "./Stack"

const images = [
  { id: 1, img: "./stacks/balatik.JPG" },
  { id: 2, img: "./stacks/toga.JPG" },
  { id: 3, img: "./stacks/formal.JPG" }
];

export const AboutMe = () => {
    return <section id="about" className="py-24 px-4 relative bg-[#f8f9fa]">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Get To Know <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 space-y-6 bg-secondary card-hover border rounded-lg shadow-xs p-6">
                    <h3 className="text-2xl font-semibold">Software Developer</h3>

                    <p className="text-muted-foreground">I am a fresh graduate and aspiring software developer with a passion for building software solutions tailored to user or client needs. 
                        Whether it’s a web application, desktop system, or mobile app, I focus on creating functional and user-friendly experiences. </p>

                    <p className="text-muted-foreground">I enjoy turning ideas into working products and continuously aim to improve my skills and contribute to 
                        real-world projects. I am currently open for work and excited to join a team where I can grow and make an impact.</p>

                    <div className="flex flex-col items-center">
                        <p className="text-muted-foreground inline-flex items-center gap-4 mb-2"> <MapPin/> Manila, Philippines</p>
                        <p className="text-muted-foreground inline-flex items-center gap-4"> <Briefcase/> Open to Work</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="#contact" className="cosmic-button">
                            Contact Me
                        </a>

                        <a href="" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                            View Resume
                        </a>
                    </div>
                </div>

                <div className="order-1 ml-3 md:order-2 grid grid-cols-1 gap-6 md:flex justify-items-center mb-1">


                    <Stack
                        randomRotation={false}
                        sensitivity={120}
                        sendToBackOnClick={true}
                        cardDimensions={{ width: 300, height: 400 }}
                        cardsData={images}/>

                    {/* <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">

                            <div className="p-3 rounded-full bg-primary/10">
                                <Code className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Web Development</h4>
                                <p className="text-muted-foreground">I specialize in creating responsive and interactive web applications.</p>
                            </div>

                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <User className="h-6 w-6 text-primary" />
                            </div>

                            <div className="text-left">
                                <h4 className="font-semibold text-lg">User Experience</h4>
                                <p className="text-muted-foreground">I focus on creating intuitive and engaging user experiences.</p>
                            </div>
                        </div>
                    </div>

                    <div className="gradient-border p-6 card-hover">
                        <div className="flex items-start gap-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Briefcase className="h-6 w-6 text-primary" />
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg">Project Management</h4>
                                <p className="text-muted-foreground">I have experience in managing projects and leading teams to success.</p>
                            </div>
                        </div>
                    </div> */}

                   
                    
                </div>


            </div>
        </div>
    </section>
}