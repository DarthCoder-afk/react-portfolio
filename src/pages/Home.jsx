import { AboutMe } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { NavBar } from "../components/NavBar"
import Particles from "../components/Particles"
import { ProjectSection } from "../components/ProjectSection"
import { SkillSection } from "../components/SkillSection"
import { ThemeToggle } from "../components/ThemeToggle"


export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
           {/* Theme Toggle */}
           {/* <ThemeToggle /> */}

            {/* NavBar */}
           <NavBar/>

           {/* Background Effects */}
           <div className="fixed inset-0 w-full h-full min-h-full z-0 pointer-events-none">
                <Particles
                    dotSize={2.5}
                    gap={22}
                    baseColor="#c8ced4ff"
                    activeColor="#212529"
                    proximity={100}
                    shockRadius={250}
                    shockStrength={5}
                    resistance={750}
                    returnDuration={1.5}
                />
            </div>
          
           {/* Main Content */}
           <main className="relative z-10 ">
                <HeroSection/>
                <AboutMe/>
                <SkillSection/>
                <ProjectSection/>
                <ContactSection/>
                <Footer/>
           </main>
           {/* Footer */}
        </div>
    )
}