import type { ReactNode } from "react";

interface NavMenuPaneProps {
    variant?: "primary" | "secondary",
    children: ReactNode,
};

const NavMenuPane = ({
    variant = "primary",
    children,
}: NavMenuPaneProps) => {
    return (
        <div
            className={`
                nav-menu-pane
                flex
                min-w-55
                max-h-70
                flex-col
                overflow-y-auto
                overscroll-contain
                p-sm
                ${variant === "primary"
                    ? "bg-surface-subtle"
                    : "bg-surface"
                }
            `}
        >
            {children}
        </div>
    );
};

export default NavMenuPane;