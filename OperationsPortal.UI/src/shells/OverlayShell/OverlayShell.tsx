import type { MouseEventHandler, ReactNode } from "react";

interface OverlayShellProps {
    children: ReactNode,
    size?: "small" | "medium" | "large"
    onMouseDown?: MouseEventHandler<HTMLDivElement>,
    onMouseUp?: MouseEventHandler<HTMLDivElement>,
}

const sizeClasses = {
    small: "h-[50vh] w-[40vw]",
    medium: "h-[70vh] w-[60vw]",
    large: "h-[80vh] w-[70vw]",
};

const OverlayShell = ({
    children,
    onMouseDown,
    onMouseUp,
    size="medium"
}: OverlayShellProps) => {

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/20 backdrop-blur-sm"
            onMouseDown={onMouseDown}
            onMouseUp={onMouseUp}
        >
            <div
                className={`flex flex-col overflow-hidden bg-surface p-lg ${sizeClasses[size]}`}
                onClick={(event) => event.stopPropagation()}
            >
                <div className="flex min-h-0 flex-1 flex-col border-x border-border-primary px-xl">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default OverlayShell;