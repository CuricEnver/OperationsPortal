import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

import type { ReactNode } from "react";

interface MenuProps {
    label: string,
    isOpen: boolean,
    onToggle: () => void,
    children: ReactNode,
    active?: boolean,
    align?: "left" | "right",
    isExpanded?: boolean,
}

const NavMenu = ({
    label,
    isOpen,
    onToggle,
    children,
    active = false,
    align = "left",
    isExpanded = false,
}: MenuProps) => {
    const menuRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!isOpen) return;

        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                onToggle();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutside
            );
        };
    }, [isOpen, onToggle]);

    return (
        <div
            ref={menuRef}
            className={`
                relative
                ${align === "left"
                    ? "nav-menu-left"
                    : "nav-menu-right"
                }
            `}
        >
            <button
                type="button"
                className={`
                    flex
                    cursor-pointer
                    items-center
                    gap-sm
                    whitespace-nowrap
                    px-md
                    py-sm
                    text-large
                    font-medium
                    text-text-subtle
                    transition-colors
                    hover:bg-primary-light
                    hover:text-primary
                    ${isOpen ? "bg-primary-light text-primary" : ""}
                    ${active ? "text-primary" : ""}
                `}
                onClick={onToggle}
            >
                <span>
                    {label}
                </span>

                <ChevronDown
                    className={`
                        size-4
                        transition-transform
                        ${isOpen ? "rotate-180" : ""}
                    `}
                />
            </button>

            {isOpen && (
                <div
                    className={`
                        menu-panel
                        absolute
                        top-full
                        z-50
                        mt-sm
                        py-xs
                        flex
                        select-none
                        overflow-hidden
                        border
                        border-border-medium
                        bg-surface
                        transition-[width]
                        duration-300
                        ease-in-out
                        ${isExpanded
                            ? "w-110"
                            : "w-55"
                        }
                        ${align === "left"
                            ? "left-0 flex-row"
                            : "right-0 flex-row-reverse"
                        }
                    `}
                >
                    {children}
                </div>
            )}
        </div>
    );
};

export default NavMenu;