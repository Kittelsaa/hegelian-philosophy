// components/ThemeSelect.tsx

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import { cx } from "@/lib/utils";

const THEME_MAP = {
  light: {
    label: "Light",
    icon: <Sun size={16} />,
  },
  dark: {
    label: "Dark",
    icon: <Moon size={16} />,
  },
};

export const ThemeSelect: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-28" />;
  }

  const options: Array<{ value: "light" | "dark"; label: string }> = [
    { value: "light", label: THEME_MAP.light.label },
    { value: "dark", label: THEME_MAP.dark.label },
  ];

  return (
    <div
      className={cx(
        "flex bg-white/30 dark:bg-gray-800/30 backdrop-blur-sm gap-4",
        "border border-white/20 dark:border-gray-700/30",
        "rounded-2xl p-1"
      )}
    >
      {options.map((option) => {
        const isActive = theme === option.value;
        const isLight = option.value === "light";

        return (
          <button
            key={option.value}
            onClick={() => setTheme(option.value)}
            className={cx(
              "flex-1 flex items-center justify-center gap-1",
              "py-2 px-4 rounded-xl",
              "transition-all duration-200 ease-in-out",
              isActive
                ? isLight
                  ? "bg-accent-blue text-white font-semibold transform scale-105"
                  : "bg-accent-red text-white font-semibold transform scale-105"
                : isLight
                ? cx(
                    "text-gray-600 hover:text-accent-blue hover:bg-accent-blue/10",
                    "dark:text-gray-300 dark:hover:text-accent-blue dark:hover:bg-accent-blue/20"
                  )
                : cx(
                    "text-gray-900 hover:text-accent-red hover:bg-accent-red/10",
                    "dark:text-gray-300 dark:hover:text-accent-red dark:hover:bg-accent-red/20"
                  )
            )}
            aria-label={option.label}
            title={option.label}
          >
            {THEME_MAP[option.value].icon}
            {option.label}
          </button>
        );
      })}
    </div>
  );
};