"use client";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "../styles/json-md.css";
import ThemeSwitcher from "./ThemeSwitcher";
import { useTheme } from "next-themes";

type MarkdownComponentProps = {
  content: string;
  classPrefix: string;
};

export default function MarkdownComponent({ content, classPrefix }: MarkdownComponentProps) {
  const { resolvedTheme } = useTheme(); // 'light' or 'dark'

  return (
    <div>
      <ThemeSwitcher />
      <ReactMarkdown rehypePlugins={[() => rehypeHighlight({ prefix: classPrefix })]} className={resolvedTheme} children={content} />
    </div>
  );
}
