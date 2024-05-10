"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = resolvedTheme === "light" ? "dark" : "light";

    setTheme(newTheme);
  };

  if (!isClient) return <div>Loading Component</div>;

  return (
    <button
      className=" text-white cursor-pointer outline-none border-blue-900 dark:border-blue-200 border-solid border-2 bg-blue-600 px-2 py-1 rounded-md text-sm font-medium hover:bg-blue-500 mb-4"
      onClick={toggleTheme}
    >
      Current Theme: {resolvedTheme}
    </button>
  );
}
