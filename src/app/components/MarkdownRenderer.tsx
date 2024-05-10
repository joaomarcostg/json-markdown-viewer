"use client";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "../styles/json-md.css";
import ThemeSwitcher from "./ThemeSwitcher";

type MarkdownComponentProps = {
  content: string;
  classPrefix: string;
};

export default function MarkdownComponent({ content, classPrefix }: MarkdownComponentProps) {

  return (
    <div>
      <ThemeSwitcher />
      <ReactMarkdown rehypePlugins={[() => rehypeHighlight({ prefix: classPrefix })]} children={content} />
    </div>
  );
}
