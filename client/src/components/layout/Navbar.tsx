import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
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
  const [location] = useLocation();

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold bg-gradient-to-r from-[#00ff9d] to-[#0af] text-transparent bg-clip-text">
              AI Engineer Blog
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-6">
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
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
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
