import { useState, useEffect } from "react";

export function useDarkMode() {
    const [isDark, setIsDark] = useState(false);

    const setTheme = (dark) => {
        setIsDark(dark);
        if (dark) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    };

    const toggleTheme = () => {
        setTheme(!isDark);
    };

    useEffect(() => {
        const localTheme = localStorage.getItem("theme");
        if (
            localTheme === "dark" ||
            (!localTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
        ) {
            setTheme(true);
        } else {
            setTheme(false);
        }
    }, []);

    return { isDark, toggleTheme };
}
