// components/ThemeSelect.tsx

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { cx } from "@/lib/utils";

export const ThemeSelect: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-28" />;
  }

  const options: Array<{ value: string; label: string }> = [
    { value: "light", label: "Light" },
    { value: "dark", label: "Dark" },
  ];

  return (
    <div
      className={cx(
        "inline-flex rounded-md border overflow-hidden text-sm",
        "border-gray-300 dark:border-gray-700"
      )}
    >
      {options.map((option) => {
        const isActive = theme === option.value;
        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cx(
              "px-3 py-1.5 transition-colors",
              isActive
                ? "bg-accent-blue text-white dark:bg-accent-red"
                : cx(
                    "bg-transparent text-gray-600 dark:text-gray-300",
                    "hover:bg-gray-100 dark:hover:bg-gray-800"
                  )
            )}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
};