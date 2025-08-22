import { X, Menu, Github, Linkedin, Instagram, Facebook } from "lucide-react";
export const Footer = () => {
    return <footer className="w-full border-t border-border bg-[#f8f9fa] mt-12">
     <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col items-center text-center text-sm text-muted-foreground space-y-2">
        
        {/* Left side - Copyright */}
        <p className="text-center md:text-left text-xs">
          © {new Date().getFullYear()} Sean Michael Borje. All rights reserved.
        </p>

        {/* Right side - Tech stack note */}
       <p className="flex flex-wrap justify-center items-center gap-2 text-xs">
          Built with 
          <span className="flex items-center gap-1">
            <i className="devicon-react-original text-lg"></i> React
          </span>, styled with 
          <span className="flex items-center gap-1">
            <i className="devicon-tailwindcss-plain text-lg"></i> Tailwind CSS
          </span>, and deployed on 
          <span className="flex items-center gap-1">
            <i className="devicon-vercel-original text-lg"></i> Vercel
          </span>.
        </p>
      </div>
    </footer>
}