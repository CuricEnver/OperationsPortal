import type { MouseEventHandler } from "react";

interface NavItemProps {
    title: string,
    description?: string,
    size?: "small" | "medium" | "large",
    isActive?: boolean,
    onClick: MouseEventHandler<HTMLDivElement>,
};

const sizeStyles = {
    small: {
        text: "text-small",
        spacing: "px-md py-sm",
    },
    medium: {
        text: "text-medium",
        spacing: "px-lg py-[10px]",
    },
    large: {
        text: "text-large",
        spacing: "px-lg py-md",
    },
};

const NavItem = ({
    title,
    description,
    size = "medium",
    isActive = false,
    onClick,
}: NavItemProps) => {
    const styles = sizeStyles[size];

    return (
        <div
            className={`
                flex
                cursor-pointer
                items-center
                justify-between
                gap-md
                border-b
                border-border-light
                text-text-neutral
                transition-colors
                last:border-b-0
                hover:bg-primary-light
                hover:text-primary
                ${styles.text}
                ${styles.spacing}
                ${isActive ? "bg-primary-light font-semibold text-primary" : ""}
            `}
            onClick={onClick}
        >
            <div className="flex w-full flex-col">
                <div className="font-medium">
                    {title}
                </div>

                {description && (
                    <div className="mt-0.5 text-small font-normal leading-[1.4] text-text-subtle">
                        {description}
                    </div>
                )}
            </div>
        </div>
    );
};

export default NavItem;