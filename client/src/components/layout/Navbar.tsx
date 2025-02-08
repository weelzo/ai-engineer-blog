import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Posts", path: "/posts" },
  { label: "Projects", path: "/projects" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    // Check localStorage and system preference on initial load
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches;
      return savedTheme || (systemPreference ? 'dark' : 'light');
    }
    return 'light';
  });
  const [location] = useLocation();

  useEffect(() => {
    // Update DOM and localStorage when theme changes
    const root = document.documentElement;
    localStorage.setItem('theme', theme);
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#0af] text-transparent bg-clip-text">
              AI Engineer's Notebook
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6 items-center">
            {NAV_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <span
                  className={cn(
                    "hover:text-[#00ff9d] transition-colors",
                    location === item.path && "text-[#00ff9d]"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <a
              href="https://github.com/weelzo"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#00ff9d] transition-colors"
            >
              GitHub
            </a>
            
            {/* Theme Toggle Button - Desktop */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-2"
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle Button - Mobile */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
            >
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setIsOpen(false)}
              >
                <span
                  className={cn(
                    "block py-2 hover:text-[#00ff9d] transition-colors",
                    location === item.path && "text-[#00ff9d]"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            ))}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 hover:text-[#00ff9d] transition-colors"
            >
              GitHub
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
