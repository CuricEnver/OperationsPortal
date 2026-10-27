import type { ReactNode } from "react";

interface FormProps {
    children: ReactNode;
    columns?: 1 | 2;
}

const columnStyles = {
    1: "grid-cols-1",

    2: `
        grid-cols-1
        lg:grid-cols-2
    `,
};

const Form = ({
    children,
    columns = 2,
}: FormProps) => {
    const columnStyle =
        columnStyles[columns];

    return (
        <div
            className={`
                grid
                gap-xl
                p-lg
                ${columnStyle}
            `}
        >
            {children}
        </div>
    );
};

export default Form;