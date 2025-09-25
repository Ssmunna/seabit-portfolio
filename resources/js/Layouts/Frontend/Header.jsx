import LargeScreenNav from "@/Components/Frontend/Header/LargeScreenNav.jsx";
import SmallScreenNav from "@/Components/Frontend/Header/SmallScreenNav.jsx";
import {useDarkMode} from "@/Hooks/useDarkMode.js";

export default function Header() {
    const { isDark, toggleTheme } = useDarkMode();

    return (
        // Header section start here
        <div className="w-full fixed top-0 left-0 right-0 bg-white z-[999] dark:bg-[#0a0e12]">
            <div className="container mx-auto">
                <LargeScreenNav isDark={isDark} toggleTheme={toggleTheme} />
                <SmallScreenNav />
            </div>
        </div>
        // Header section ends here
    );
}
