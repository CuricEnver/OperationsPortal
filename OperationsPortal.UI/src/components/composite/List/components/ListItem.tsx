import type { MouseEventHandler } from "react";

interface ListItemProps {
    title: string;
    description?: string;
    isSelected?: boolean;
    statusColor?: string;
    onClick?: MouseEventHandler<HTMLDivElement>;
}

const ListItem = ({
    title,
    description,
    isSelected = false,
    statusColor,
    onClick,
}: ListItemProps) => {
    return (
        <div
            className={`
                flex
                min-h-8
                items-center
                justify-between
                p-sm
                hover:bg-surface-subtle
                ${onClick ? "cursor-pointer select-none" : ""}
                ${
                    isSelected
                        ? "bg-primary-light"
                        : "border-l-transparent"
                }
            `}
            onClick={onClick}
        >
            <div className="flex min-w-0 items-start gap-sm">
                {statusColor && (
                    <div
                        className="mt-1.5 h-2 w-2 shrink-0 rounded-full"
                        style={{
                            backgroundColor: statusColor,
                        }}
                    />
                )}

                <div className="flex min-w-0 flex-col">
                    <div
                        className={`
                            text-medium
                            text-text-strong
                            ${
                                isSelected
                                    ? "font-semibold"
                                    : "font-medium"
                            }
                        `}
                    >
                        {title}
                    </div>

                    {description && (
                        <div className="text-small text-text-subtle">
                            {description}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ListItem;