import type { ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface HeaderProps {
    title: string,
    subtitle?: string,
    icon?: LucideIcon,
    actions?: ReactNode,
    size?: "small" | "medium" | "large",
};

const sizeStyles = {
    small: {
        header: "p-xs",
        title: "text-header-small",
        icon: "size-4",
        subtitle: "hidden",
    },
    medium: {
        header: "p-xssm",
        title: "text-header-medium",
        icon: "size-5",
        subtitle: "text-small",
    },
    large: {
        header: "p-sm",
        title: "text-header-large",
        icon: "size-6",
        subtitle: "text-small",
    },
};

const Header = ({
    icon: Icon,
    title,
    subtitle,
    actions,
    size = "large",
}: HeaderProps) => {
    const styles = sizeStyles[size];

    return (
        <header
            className={`header flex shrink-0 items-start justify-between ${styles.header} select-none`}
        >
            <div className="flex flex-col gap-xs">
                <h1
                    className={`flex items-center gap-sm font-semibold text-primary ${styles.title}`}
                >
                    {Icon && <Icon className={styles.icon} />}
                    {title}
                </h1>

                {subtitle && (
                    <span
                        className={`font-semibold uppercase tracking-wide text-text-subtle ${styles.subtitle}`}
                    >
                        {subtitle}
                    </span>
                )}
            </div>

            {actions && (
                <div className="flex shrink-0 self-end">
                    {actions}
                </div>
            )}
        </header>
    );
};

export default Header;