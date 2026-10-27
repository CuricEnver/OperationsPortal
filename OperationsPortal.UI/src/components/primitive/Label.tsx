import type { ReactNode } from "react";

interface LabelProps {
    children: ReactNode,
    size?: "small" | "medium" | "large",
};

const sizeStyles = {
    small: {
        text: "text-label-small",
    },
    medium: {
        text: "text-label-medium",
    },
    large: {
        text: "text-lael-large",
    },
};

const Label = ({
    children,
    size = "small",
}: LabelProps) => {
    const styles = sizeStyles[size];

    return (
        <div
            className={`
                font-medium
                text-text-subtle
                ${styles.text}
            `}
        >
            {children}
        </div>
    );
};

export default Label;
