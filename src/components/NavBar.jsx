import { cn } from "@/lib/utils";
import { X, Menu } from "lucide-react";
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
            setScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <nav className={cn("fixed w-full z-40 transition-all duration-200",
        Scrolled ? "py-3 bg-primary/20 backdrop-blur-md shadow-xs" : "py-5",
    )}>
        <div className="container flex items-center justify-between">
            <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Sean</span> 
                </span>
            </a>

            {/* Desktop View */}
            <div className="hidden md:flex space-x-8">
                {navItems.map((item, key) => (
                    <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-200 hover:bg-primary/10 hover:border hover:border-primary rounded-lg px-1 py-2 ">
                        {item.name}</a>
                ))}
            </div>

            {/* Mobile View */}

            <button onClick={()=> setIsMenuOpen((prev) => !prev)} 
            className="md:hidden text-foreground z-50"
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
                </div>
            </div>
        </div>
    </nav>
}