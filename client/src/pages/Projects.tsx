import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiGithub } from "react-icons/si";

const ALL_PROJECTS = [
  {
    title: "AI Agent Debate Tournament",
    description: "Experimental systems where AI models argue ethical dilemmas, ensuring diverse perspectives before deployment.",
    technologies: ["Python", "Langchain", "Transformers"],
    github: "https://github.com/weelzo/ai-agnet-debate-tournament",
  },
  {
    title: "OmniQuery",
    description: "A Multimodal Retrieval-Augmented Generation (RAG)",
    technologies: ["Python", "FAISS", "Sentence Transformers", "Tesseract OCR"],
    github: "https://github.com/weelzo/omni-query",
  },
  {
    title: "AI Research Paper Summarizer",
    description: "Web app that summarizes AI research papers using LLMs",
    technologies: ["Next.js", "Python", "Hugging Face"],
    github: "https://github.com/username/paper-summarizer",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Projects() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      <motion.div 
        className="grid grid-cols-1 gap-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {ALL_PROJECTS.map((project) => (
          <motion.div 
            key={project.title}
            variants={item}
            whileHover={{ 
              scale: 1.02,
              transition: { type: "spring", stiffness: 300 }
            }}
          >
            <Card className="hover:border-[#00ff9d]/50 transition-colors">
              <CardHeader>
                <CardTitle className="flex justify-between items-start gap-4">
                  <span>{project.title}</span>
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400 }}
                  >
                    <Button variant="ghost" size="icon">
                      <SiGithub className="h-5 w-5" />
                    </Button>
                  </motion.a>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <motion.div 
                  className="flex flex-wrap gap-2"
                  variants={container}
                  initial="hidden"
                  animate="show"
                >
                  {project.technologies.map((tech) => (
                    <motion.span
                      key={tech}
                      className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                      variants={item}
                      whileHover={{ scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}