import { ArrowDown } from "lucide-react"
import TextType from "./TextType"

export const HeroSection = () => {
    return <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4">
        <div className="container max-w-4xl mx-auto text-center z-10">

            <div className="space-y-6">
                <div className="transition-transform duration-500 hover:scale-110">
                     <img
                        src="./profile/balatik.JPG" // <-- Replace with your image path
                        alt="Sean Michael Borje"
                        className="mx-auto rounded-full w-60 h-60 object-cover border-3 border-[#343a40] shadow-lg mb-4 "
                    />
                </div>
               
                <h1 className="text-2xl md:text-6xl font-bold tracking-light">
                    <span className="opacity-0 animate-fade-in delay-2">
                        <TextType 
                            text={["Hi! Welcome to my Portfolio", "My name is", "Sean Michael A. Borje"]}
                            typingSpeed={75}
                            pauseDuration={1500}
                            showCursor={true}
                            cursorCharacter="|"
                        />
                    </span>
                </h1>
                <p className="text-md md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
                    I’m a passionate software developer who loves turning ideas into interactive experiences.
                    From front-end design to back-end logic, I build tools that make a difference 🧑‍💻💻                   
                </p>

            </div>

            <div className="opacity-0 animate-fade-in-delay-4 mt-8">
                <a href="#projects" className="cosmic-button">
                    Explore My Work
                </a>
            </div>

        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <a href="#about"><span className="text-sm text-muted-foreground mb-2">Scroll</span></a>
            <ArrowDown className="h-5 w-5 text-primary" />
        </div>

    </section>
}