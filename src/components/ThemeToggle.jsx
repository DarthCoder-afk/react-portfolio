
import { Sun } from "lucide-react";
import { Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    // If exists, checks the Local Storage for the theme
    useEffect(()=> {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark"){
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            setIsDarkMode(false);
            document.documentElement.classList.remove("dark");
        }
    }, [])

    const toggleTheme = () => {
        if (isDarkMode){
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
            
        } else {
            document.documentElement.classList.add("dark");
             localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
           
        }
    }

    return (<button onClick={toggleTheme} 
        className={cn(
        "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
        "focus:outline-none"
    )}>
        {isDarkMode ? 
        (<Sun className="h-6 w-6 text-yellow-300" />)
         : (<Moon className="h-6 w-6 text-blue-900" />)
         }
        </button>
    );
}