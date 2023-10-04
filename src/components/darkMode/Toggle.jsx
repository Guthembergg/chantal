import React from "react";
import Toggle from "react-toggle";
import { useColorScheme } from "./Remember";
import "react-toggle/style.css";
export default function DarkModeToggle() {
  const { isDark, setIsDark } = useColorScheme();
  return (
    <Toggle
      checked={isDark}
      onChange={({ target }) => setIsDark(target.checked)}
      aria-label="Dark mode toggle"
    />
  );
}
