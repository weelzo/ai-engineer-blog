import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";

const TYPING_TEXTS = [
  "Transformers >",
  "PyTorch >",
  "LLMs >",
  "Computer Vision >",
  "NLP >",
];

export default function Hero() {
  const [textIndex, setTextIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setIsTyping(false);
      setTimeout(() => {
        setTextIndex((prev) => (prev + 1) % TYPING_TEXTS.length);
        setIsTyping(true);
      }, 500);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-20 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="bg-gradient-to-r from-[#00ff9d] to-[#0af] text-transparent bg-clip-text">
            AI Engineer's
          </span>{" "}
          Notebook
        </h1>

        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Exploring the frontiers of artificial intelligence through practical
          implementations and insights.
        </p>

        <div className="font-mono text-lg mb-8 h-8">
          <motion.span
            key={textIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-[#00ff9d]"
          >
            {isTyping && TYPING_TEXTS[textIndex]}
          </motion.span>
        </div>

        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/weelzo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
          >
            <SiGithub size={32} />
          </a>
          <a
            href="https://www.linkedin.com/in/wael-feriz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
          >
            <SiLinkedin size={32} />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
          >
            <SiX size={32} />
          </a>
        </div>
      </motion.div>
    </div>
  );
}