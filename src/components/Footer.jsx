import { X, Menu, Github, Linkedin, Instagram, Facebook } from "lucide-react";
export const Footer = () => {
    return <footer className="w-full px-4 py-6 border-t border-border text-center md:text-left bg-[#f8f9fa] relative border-t border-border mt-12 pt-8">
        <div className="flex flex-col md:flex-row items-center md:justify-center px-4 space-y-4 md:space-y-0">
            <p className="text-muted-foreground text-sm">
            Copyright © {new Date().getFullYear()} Sean Michael Borje. All rights reserved.
            </p>
            
        </div>
</footer>
}