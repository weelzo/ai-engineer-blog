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
          I'm an AI Engineer passionate about making artificial intelligence more
          accessible and understandable through practical examples and clear
          explanations.
        </motion.p>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.h2 variants={item}>Background</motion.h2>
          <motion.p variants={item}>
            With several years of experience in machine learning and deep learning,
            I've worked on various projects ranging from natural language processing
            to computer vision. I'm particularly interested in transformer
            architectures and their applications across different domains.
          </motion.p>

          <motion.h2 variants={item}>Skills</motion.h2>
          <motion.ul variants={item}>
            <li>Deep Learning (PyTorch, TensorFlow)</li>
            <li>Natural Language Processing</li>
            <li>Computer Vision</li>
            <li>MLOps & Model Deployment</li>
            <li>Full Stack Development</li>
          </motion.ul>

          <motion.h2 variants={item}>Code Sample</motion.h2>
          <motion.p variants={item}>Here's a simple example of a PyTorch training loop:</motion.p>
          <motion.div 
            variants={item}
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <CodeBlock code={SAMPLE_CODE} language="python" />
          </motion.div>

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