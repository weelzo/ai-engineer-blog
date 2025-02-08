import { Link } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const FEATURED_POSTS = [
  {
    id: 1,
    slug: "reimagining-transformer",
    title: "Reimagining the Transformer",
    excerpt:
      "Beyond Conventional Explanations...",
    date: "2025-10-02",
    tags: ["NLP", "Transformers", "Deep Learning"],
  },
  {
    id: 2,
    slug: "implementing-clip",
    title: "Implementing CLIP in PyTorch",
    excerpt:
      "Step-by-step guide to implementing OpenAI's CLIP model for vision-language tasks...",
    date: "2024-01-10",
    tags: ["Computer Vision", "PyTorch", "MultiModal"],
  },
  {
    id: 3,
    slug: "fine-tuning-llms",
    title: "Fine-tuning LLMs: Best Practices",
    excerpt:
      "Learn the best practices and common pitfalls when fine-tuning large language models...",
    date: "2024-01-05",
    tags: ["LLM", "Fine-tuning", "NLP"],
  },
];

export default function FeaturedPosts() {
  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold mb-8">Featured Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {FEATURED_POSTS.map((post, index) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="h-full hover:border-[#00ff9d]/50 transition-colors">
              <CardHeader>
                <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                <div className="flex flex-wrap gap-2 mt-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">
                    {new Date(post.date).toLocaleDateString()}
                  </span>
                  <Link href={`/posts/${post.slug}`}>
                    <span className="text-[#00ff9d] hover:underline">
                      Read more →
                    </span>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
