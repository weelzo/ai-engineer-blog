import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const PROJECTS = [
  {
    title: "GPT-4 Fine-tuning Framework",
    description: "A framework for fine-tuning GPT-4 models on custom datasets",
    technologies: ["Python", "PyTorch", "Transformers"],
    github: "https://github.com/username/gpt4-finetuning",
  },
  {
    title: "Vision Transformer Implementation",
    description: "Pure PyTorch implementation of Vision Transformer (ViT)",
    technologies: ["Python", "PyTorch", "Computer Vision"],
    github: "https://github.com/username/vision-transformer",
  },
  {
    title: "AI Research Paper Summarizer",
    description: "Web app that summarizes AI research papers using LLMs",
    technologies: ["Next.js", "Python", "Hugging Face"],
    github: "https://github.com/username/paper-summarizer",
  },
];

export default function Projects() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-[#00ff9d]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex justify-between items-start gap-4">
                  <span>{project.title}</span>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <SiGithub className="h-5 w-5" />
                    </Button>
                  </a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
