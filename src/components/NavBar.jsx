import { cn } from "@/lib/utils";
import { X, Menu, Github, Linkedin, Facebook } from "lucide-react";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
import { fadeIn } from "../variants";
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
    const [hoverPosition, setHoverPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
    });

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [isMenuOpen]);

    return <nav className={cn("fixed w-full z-40 font-semibold transition-all duration-200",
        Scrolled ? "py-3 bg-[#f8fafc] shadow-lg md:bg-transparent md:shadow-none" : "py-5 bg-transparent",
    )}>
        <div className="container mx-auto flex items-center justify-between px-4">
             {/* Desktop View */}
            <motion.div 
                variants={fadeIn('down', 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: true, amount: 0.3}}
                className="hidden md:flex w-full justify-center mt-1 relative">
                <div className="w-full max-w-5xl bg-[#f8f9fa] border border-[#6C757D] rounded-full shadow-lg px-6 py-4 flex items-center justify-between relative">
                    
                    {/* Left: Name */}
                    <a href="#hero" className="text-lg font-bold text-primary">
                        <span className="text-foreground">Sean</span>
                    </a>

                    {/* Center: Navigation */}
                    <ul 
                    onMouseLeave={() => {
                    setHoverPosition((pv) => ({ ...pv, opacity: 0 }));
                    }}
                    className="relative flex space-x-6 ">
                        {navItems.map((item, key) => (
                            <li
                            key={key}
                            className="relative z-10 cursor-pointer text-sm font-medium text-gray-800 hover:text-secondary transition-colors px-4 py-2"
                            onMouseEnter={(e) => {
                                const target = e.currentTarget;
                                const { width } = target.getBoundingClientRect();
                                setHoverPosition({
                                    left: target.offsetLeft - 4, // optional: shift left a bit
                                    width: width + 8,           // make it wider than the item
                                    opacity: 1,
                                });
                            }}
                            >
                            <a href={item.href}>{item.name}</a>
                            </li>
                        ))}
                         <motion.div
                            layout
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                            animate={{
                                left: hoverPosition.left,
                                width: hoverPosition.width,
                                opacity: hoverPosition.opacity,
                            }}
                            className="absolute top-1/2 -translate-y-1/2 h-10 px-4 rounded-full bg-primary -z-0"
                        />
                    </ul>

                    {/* Right: Social Icons */}
                    <div className="flex space-x-4">
                        <a href="https://github.com/DarthCoder-afk" target="_blank" rel="noopener noreferrer">
                            <Github className="text-foreground/70 hover:text-primary transition" size={17} />
                        </a>
                        <a href="https://www.linkedin.com/in/seanmichaelarriolaborje" target="_blank" rel="noopener noreferrer">
                            <Linkedin className="text-foreground/70 hover:text-primary transition" size={17} />
                        </a>
                        <a href="https://www.facebook.com/seanmichael.borje.7/" target="_blank" rel="noopener noreferrer">
                            <Facebook className="text-foreground/70 hover:text-primary transition" size={17} />
                        </a>
                    </div>

                </div>
            </motion.div>


            {/* Mobile View */}

            <button onClick={()=> setIsMenuOpen((prev) => !prev)} 
            className="md:hidden text-foreground z-50 align-right"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}>
                {isMenuOpen? <X size={24} /> : <Menu size={24} />}</button>

            <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                "transition-all duration-300 md:hidden",
                isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",

                
            )}>
                <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-200 " onClick={() => setIsMenuOpen(false)}>
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
                        <a href="https://www.facebook.com/seanmichael.borje.7/" target="_blank" rel="noopener noreferrer">
                        <Facebook className="text-foreground/70 hover:text-primary transition" size={24} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </nav>
}