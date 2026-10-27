import type {
    MouseEventHandler,
    ReactNode,
} from "react";

interface ButtonProps {
    children: ReactNode;

    size?: "small" | "medium" | "large";

    color?:
        | "primary"
        | "danger"
        | "ghost";

    disabled?: boolean;

    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const sizeStyles = {
    small: {
        text: "text-small",
        weight: "font-medium",
        spacing: "px-sm py-xs",
    },

    medium: {
        text: "text-medium",
        weight: "font-semibold",
        spacing: "px-lg py-xssm",
    },

    large: {
        text: "text-large",
        weight: "font-semibold",
        spacing: "px-xl py-sm",
    },
};

const colorStyles = {
    primary: `
        border
        border-border-strong
        text-primary

        hover:border-primary
        hover:bg-primary-light
    `,

    danger: `
        border
        border-danger
        text-danger

        hover:bg-danger-light
    `,

    ghost: `
        border
        border-transparent
        text-text-primary

        hover:text-primary
        hover:bg-primary-light
    `,
};

const Button = ({
    children,
    size = "medium",
    color = "primary",
    disabled = false,
    onClick,
}: ButtonProps) => {
    const styles =
        sizeStyles[size];

    const colors =
        colorStyles[color];

    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`
                inline-flex
                items-center
                justify-center
                gap-xssm

                whitespace-nowrap
                select-none

                rounded-xs

                transition-colors

                ${styles.text}
                ${styles.weight}
                ${styles.spacing}

                ${colors}

                ${
                    disabled
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer"
                }
            `}
        >
            {children}
        </button>
    );
};

export default Button;