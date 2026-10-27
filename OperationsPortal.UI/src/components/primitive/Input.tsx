import type { InputHTMLAttributes } from "react";
import { Search } from "lucide-react";

interface InputProps
    extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
    size?: "small" | "medium" | "large",
};

const sizeStyles = {
    small: {
        input: "h-[30px] px-sm text-small",
        search: "pl-xl",
        icon: "size-4",
    },
    medium: {
        input: "h-[36px] px-sm text-medium",
        search: "pl-xl",
        icon: "size-4",
    },
    large: {
        input: "h-[42px] px-md text-large",
        search: "pl-xxl",
        icon: "size-5",
    },
};

const Input = ({
    type = "text",
    size = "medium",
    ...props
}: InputProps) => {
    const styles = sizeStyles[size];

    const inputClasses = `
        w-full
        bg-transparent
        font-medium
        text-text-strong
        outline-none
        transition-colors
        placeholder:text-text-subtle
        ${styles.input}
    `;

    if (type === "search") {
        return (
            <div className="relative w-full">
                <Search
                    className={`pointer-events-none absolute left-xs top-1/2 -translate-y-1/2 text-text-subtle ${styles.icon}`}
                />

                <input
                    type="search"
                    className={`${inputClasses} ${styles.search} border-b border-border-light focus:border-primary`}
                    {...props}
                />
            </div>
        );
    }

    return (
        <input
            type={type}
            className={`${inputClasses} border-b border-border-light focus:border-primary`}
            {...props}
        />
    );
};

export default Input;