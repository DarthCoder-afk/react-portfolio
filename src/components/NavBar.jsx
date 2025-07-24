import { cn } from "@/lib/utils";
import { X, Menu, Github, Linkedin, Instagram, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
]


export const NavBar = () => {
    const[Scrolled, setScrolled] = useState(false);
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            console.log("scrollY:", window.scrollY);
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <nav className={cn("fixed w-full z-40 font-semibold shadow-xs bg-[#f8fafc] transition-all duration-200",
        Scrolled ? "py-3 bg-[#f8fafc] backdrop-blur-lg shadow-lg" : "py-5",
    )}>
        <div className="container mx-auto flex items-center justify-between px-4">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center hidden md:flex">
                <span className="relative z-10">
                    <span className="text-foreground">Sean</span> 
                </span>
            </a>

            {/* Desktop View */}
            <div className="hidden md:flex mx-auto space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="border-b border-transparent text-foreground/80 hover:text-primary hover:border-primary hover:border-b-2 transition-colors duration-200 ">
                        {item.name}</a>
                ))}
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 ml-6 hidden md:flex">
                <a href="https://github.com/DarthCoder-afk" target="_blank" rel="noopener noreferrer">
                <Github className="text-foreground/70 hover:text-primary transition" size={20} />
                </a>
                <a href="https://www.linkedin.com/in/seanmichaelarriolaborje" target="_blank" rel="noopener noreferrer">
                <Linkedin className="text-foreground/70 hover:text-primary transition" size={20} />
                </a>
                <a href="https://www.instagram.com/sean_borje/" target="_blank" rel="noopener noreferrer">
                <Instagram className="text-foreground/70 hover:text-primary transition" size={20} />
                </a>
                 <a href="https://www.facebook.com/seanmichael.borje.7/" target="_blank" rel="noopener noreferrer">
                <Facebook className="text-foreground/70 hover:text-primary transition" size={20} />
                </a>
            </div>

            {/* Mobile View */}

            <button onClick={()=> setIsMenuOpen((prev) => !prev)} 
            className="md:hidden text-foreground z-50 align-right"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen? <X size={24} /> : <Menu size={24} />}</button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colores duration-200 " onClick={() => setIsMenuOpen(false)}>
                            {item.name}</a>
                    ))}

                    {/* Mobile Social Icons */}
                    <div className="flex space-x-4 pt-8">
                        <a href="https://github.com/DarthCoder-afk" target="_blank" rel="noopener noreferrer">
                        <Github className="text-foreground/70 hover:text-primary transition" size={24} />
                        </a>
                        <a href="https://www.linkedin.com/in/seanmichaelarriolaborje" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="text-foreground/70 hover:text-primary transition" size={24} />
                        </a>
                        <a href="https://www.instagram.com/sean_borje/" target="_blank" rel="noopener noreferrer">
                        <Instagram className="text-foreground/70 hover:text-primary transition" size={24} />
                        </a>
                        <a href="https://www.facebook.com/seanmichael.borje.7/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="text-foreground/70 hover:text-primary transition" size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}