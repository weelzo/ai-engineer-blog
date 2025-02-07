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
    if (post) {
      console.log('Attempting to load:', post.slug);
      const markdownPath = `/src/data/posts/${post.slug}.md`;
      console.log('Full path:', markdownPath);
      
      fetch(markdownPath)
        .then((res) => {
          console.log('Response status:', res.status);
          if (!res.ok) {
            console.error(`Failed to load post: ${res.status}`);
            throw new Error('Failed to load post');
          }
          return res.text();
        })
        .then((text) => {
          console.log('Content loaded, first 50 chars:', text.substring(0, 50));
          setContent(text);
        })
        .catch((error) => {
          console.error('Detailed error:', error);
          setContent('Failed to load post content');
        });
    }
  }, [post]);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <div className="text-muted-foreground mb-8">
        {new Date(post.date).toLocaleDateString()}
      </div>
      <div className="prose prose-invert max-w-none">
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