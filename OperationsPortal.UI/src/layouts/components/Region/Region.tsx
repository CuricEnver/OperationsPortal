import type { ReactNode } from "react";

interface RegionProps {
    children: ReactNode,
    scrollable?: boolean,
    className?: string,
}

const Region = ({
    children,
    scrollable = false,
    className = "",
}: RegionProps) => {
    return (
        <div
            className={`
                region
                flex
                min-h-0
                min-w-0
                flex-1
                flex-col
                px-md
                py-sm
                ${scrollable ? "overflow-y-auto overflow-x-hidden" : ""}
                ${className}
            `}
        >
            {children}
        </div>
    );
};

export default Region;