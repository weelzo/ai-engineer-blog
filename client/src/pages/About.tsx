import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import CodeBlock from "@/components/blog/CodeBlock";
import { motion } from "framer-motion";

const SAMPLE_CODE = `def train_transformer(
    model: nn.Module,
    optimizer: torch.optim.Optimizer,
    data: DataLoader
) -> float:
    model.train()
    total_loss = 0.0

    for batch in data:
        optimizer.zero_grad()
        output = model(batch)
        loss = criterion(output, batch.target)
        loss.backward()
        optimizer.step()

        total_loss += loss.item()

    return total_loss / len(data)`;

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

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h1 
        className="text-4xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h1>

      <div className="prose prose-invert max-w-none">
        <motion.p 
          className="text-xl mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          I'm Wael Feriz, an AI Engineer driven by a passion for turning complex AI concepts
           into practical, real-world applications. I thrive on building intelligent systems
            that enhance decision-making, automate processes, and unlock new possibilities
             with machine learning.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={item}>Background</motion.h2>
          <motion.p variants={item}>
            With a strong foundation in machine learning, deep learning, and AI-driven solutions, I've worked across diverse industries, applying AI to improve search, automation, and user experiences. I enjoy exploring the latest advancements in transformer architectures, NLP, and computer vision, always looking for innovative ways to push AI beyond traditional boundaries.

            Beyond my professional work, I actively contribute to the AI community, sharing insights, mentoring others, and engaging in discussions about the future of artificial intelligence.
          </motion.p>

          <motion.h2 variants={item}>My AI Philosophy</motion.h2>
          <motion.p variants={item}>
          AI is more than just algorithms—it’s a way to amplify human potential. I believe in building intelligent systems that are intuitive, adaptable, and impactful. For me, AI isn’t just about accuracy; it’s about creating technology that truly understands, assists, and enhances human decision-making. The future of AI isn’t just about what machines can do, but how they collaborate with us to shape a smarter world.
          </motion.p>

          <motion.h2 variants={item}>Connect With Me</motion.h2>
          <motion.div
            className="flex gap-6 my-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {[
              { icon: SiGithub, href: "https://github.com" },
              { icon: SiLinkedin, href: "https://linkedin.com" },
              { icon: SiX, href: "https://twitter.com" }
            ].map(({ icon: Icon, href }, index) => (
              <motion.a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-[#00ff9d] transition-colors"
                variants={item}
                whileHover={{ scale: 1.2, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={32} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}