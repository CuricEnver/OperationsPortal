import type { ReactNode } from "react";

interface SectionProps {
    children: ReactNode;
    scrollable?: boolean;
}

const Section = ({
    children,
    scrollable = false,
}: SectionProps) => {
    return (
        <div
            className={`
                section
                flex
                min-w-0
                flex-col
                px-sm
                py-xssm

                ${
                    scrollable
                        ? "min-h-0 flex-1 overflow-y-auto"
                        : ""
                }
            `}
        >
            {children}
        </div>
    );
};

export default Section;