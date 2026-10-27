import type { ReactNode } from "react";
import Label from "../primitive/Label";

interface FieldProps {
    label: ReactNode, 
    children: ReactNode,
    size?: "small" | "medium" | "large"
};

const sizeStyles = {
    small: {
        gap: "gap-xs",
    },
    medium: {
        gap: "gap-sm",
    },
    large: {
        gap: "gap-md",
    },
};

const Field = ({ label, children, size="small"}: FieldProps) => {
    const styles = sizeStyles[size];

    return (
        <div className={`flex flex-col ${styles.gap}`}>
            <Label
                size={size}
            >
                {label}
            </Label>

            {children}
        </div>
    );
};

export default Field;
