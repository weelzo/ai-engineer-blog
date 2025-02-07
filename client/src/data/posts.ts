interface Post {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    date: string;
    tags: string[];
    content: string;
  }
  
  export const posts: Post[] = [
    {
      id: 1,
      slug: 'understanding-transformers',
      title: 'Understanding Transformer Architecture',
      excerpt: 'Deep dive into the architecture that revolutionized natural language processing...',
      date: '2024-01-15',
      tags: ['NLP', 'Transformers', 'Deep Learning'],
      content: '' // Will be loaded from markdown file
    },
    {
      id: 2,
      slug: 'implementing-clip',
      title: 'Implementing CLIP in PyTorch',
      excerpt: 'Step-by-step guide to implementing OpenAI\'s CLIP model for vision-language tasks...',
      date: '2024-01-10',
      tags: ['Computer Vision', 'PyTorch', 'MultiModal'],
      content: '' // Will be loaded from markdown file
    },
    {
      id: 3,
      slug: 'fine-tuning-llms',
      title: 'Fine-tuning LLMs: Best Practices',
      excerpt: 'Learn the best practices and common pitfalls when fine-tuning large language models...',
      date: '2024-01-05',
      tags: ['LLM', 'Fine-tuning', 'NLP'],
      content: '' // Will be loaded from markdown file
    }
  ];
  
  export type { Post };
  