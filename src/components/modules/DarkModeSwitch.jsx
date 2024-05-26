"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";

const DarkModeSwitch = () => {
  // =========== Theme ===========
  const { theme, setTheme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  // =========== State ===========
  const [mounted, setMounted] = useState(false);

  // =========== Effect ===========
  useEffect(() => {
    setMounted(true);
  }, []);
  // =========== Rendering ===========
  return (
    <div>
      {mounted && currentTheme === "dark" ? (
        <MdLightMode
          onClick={() => setTheme("light")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      ) : (
        <MdDarkMode
          onClick={() => setTheme("dark")}
          className="text-xl cursor-pointer hover:text-amber-500"
        />
      )}
    </div>
  );
};

export default DarkModeSwitch;
