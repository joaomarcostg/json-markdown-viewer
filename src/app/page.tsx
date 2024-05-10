import { getMarkdownStringFromObj } from "@/lib/utils";
import MarkdownRenderer from "./components/MarkdownRenderer";

export default function Home() {
  const personalInfo = {
    location: "Brazil",
    age: 24,
    experience: "4+ years",
    stack: ["React", "Node", "Next", "TypeScript"],
  };

  const markdown = getMarkdownStringFromObj(personalInfo);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 ">
      <MarkdownRenderer classPrefix="json-md-" content={markdown}/>
    </main>
  );
}
