import type { ReactNode } from "react";

interface FooterProps {
    children?: ReactNode,
    variant?: "actions" | "full",
}

const variantStyles = {
    actions: "justify-end gap-sm",
    full: "[&>*]:w-full flex-col",
};

const Footer = ({
    children,
    variant = "actions",
}: FooterProps) => {
    const styles = variantStyles[variant];

    return (
        <footer
            className={`
                footer
                flex
                items-center
                p-sm
                gap-y-1
                ${styles}
                bg-surface
                z-10
            `}
        >
            {children}
        </footer>
    );
};

export default Footer;