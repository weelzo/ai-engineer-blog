import { Link } from "wouter";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold mb-4">About This Blog</h3>
            <p className="text-muted-foreground">
              Exploring AI, Machine Learning, and Deep Learning through practical
              examples and insights.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link href="/posts">
                <span className="block text-muted-foreground hover:text-[#00ff9d] transition-colors">
                  All Posts
                </span>
              </Link>
              <Link href="/projects">
                <span className="block text-muted-foreground hover:text-[#00ff9d] transition-colors">
                  Projects
                </span>
              </Link>
              <Link href="/about">
                <span className="block text-muted-foreground hover:text-[#00ff9d] transition-colors">
                  About Me
                </span>
              </Link>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="your@email.com"
                className="max-w-[200px]"
              />
              <Button>Subscribe</Button>
            </div>
            <div className="flex gap-4 mt-6">
              <a
                href="https://github.com/weelzo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
              >
                <SiGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/wael-feriz/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
              >
                <SiLinkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
              >
                <SiX size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AI Engineer Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}