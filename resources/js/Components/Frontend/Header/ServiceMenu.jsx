import { useState, useRef, useEffect } from "react";
import NavbarItems from "@/Components/Frontend/Header/NavbarItems.jsx";

export default function ServiceMenu() {
    const [open, setOpen] = useState(false);
    const menuRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block group" ref={menuRef}>
            <button
                onClick={() => setOpen(!open)}
                className="nav_link gap-1"
            >
                Services
                <svg
                    width="8"
                    height="7"
                    viewBox="0 0 8 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.11705 6.5L0.652954 0.5H7.58118L4.11705 6.5Z"
                        fill="#2A2A2A"
                    />
                </svg>
            </button>

            {/* NavbarItems */}
            <div
                className={`${
                    open
                        ? "opacity-100 visible [&>*]:opacity-100 [&>*]:visible"
                        : "opacity-0 invisible"
                } lg:group-hover:opacity-100 lg:group-hover:visible`}
            >
                <NavbarItems />
            </div>
        </div>
    );
}
