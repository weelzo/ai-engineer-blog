import { useRoute } from "wouter";
import { posts } from "@/data/posts";
import CodeBlock from "./CodeBlock";
import { useEffect, useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function PostView() {
  const [, params] = useRoute("/posts/:slug");
  const [content, setContent] = useState("");
  const post = posts.find((p) => p.slug === params?.slug);

  useEffect(() => {
    async function loadPost() {
      if (!post) return;
      
      try {
        const markdownModule = await import(`../../data/posts/${post.slug}.md?raw`);
        setContent(markdownModule.default);
      } catch (error) {
        console.error('Error loading post:', error);
        setContent('Failed to load post content');
      }
    }
    
    loadPost();
  }, [post]);

  if (!post) {
    return <div className="text-gray-800 dark:text-white">Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-gray-800 dark:text-white text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-muted-foreground mb-8">
        {/* {new Date(post.date).toLocaleDateString()} */}
      </div>
      <div className="prose dark:prose-invert max-w-none prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-800 dark:prose-p:text-gray-300">
        <ReactMarkdown
          components={{
            code: ({node, inline, className, children, ...props}) => {
              const match = /language-(\w+)/.exec(className || '');
              return !inline && match ? (
                <CodeBlock 
                  code={String(children).replace(/\n$/, '')}
                  language={match[1]}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            }
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </div>
  );
}