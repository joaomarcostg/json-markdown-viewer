export function getMarkdownStringFromObj(content: Record<string, unknown>): string {
  try {
    const markdown = "```json\n" + JSON.stringify(content, null, 2) + "\n```";
    return markdown;
  } catch (error) {
    console.error(error);
    return "";
  }
}
