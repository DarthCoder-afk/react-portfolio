import { X, Menu, Github, Linkedin, Instagram, Facebook } from "lucide-react";
export const Footer = () => {
    return <footer className="w-full px-4 py-6 border-t border-border text-center md:text-left bg-card relative border-t border-border mt-12 pt-8">
        <div className="flex flex-col md:flex-row items-center md:justify-between space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
            Copyright © {new Date().getFullYear()} | Sean Michael Borje
            </p>
            <div className="flex space-x-4">
                <a href="https://github.com/DarthCoder-afk" target="_blank" rel="noopener noreferrer">
                    <Github className="text-foreground/70 hover:text-primary transition" size={19} />
                </a>
                <a href="https://www.linkedin.com/in/seanmichaelarriolaborje" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="text-foreground/70 hover:text-primary transition" size={19} />
                </a>
                <a href="https://www.instagram.com/sean_borje/" target="_blank" rel="noopener noreferrer">
                    <Instagram className="text-foreground/70 hover:text-primary transition" size={19} />
                </a>
                <a href="https://www.facebook.com/seanmichael.borje.7/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="text-foreground/70 hover:text-primary transition" size={19} />
                </a>
            </div>
        </div>
</footer>
}