import { Trash2 } from "lucide-react";

const UtilityActionsRenderer = (
    params: any
) => {
    if (
        params.node.rowPinned ===
        "bottom"
    ) {
        return null;
    }

    const rowIndex =
        params.value;

    const handleClick = (
        event: React.MouseEvent
    ) => {
        event.stopPropagation();

        const onDeleteRow =
            params.context
                ?.handleDeleteRow;

        if (onDeleteRow) {
            onDeleteRow(
                params.data
            );
        }
    };

    return (
        <div className="flex h-full w-full items-center gap-1">
            <button
                onClick={handleClick}
                className="
                    flex-shrink-0
                    cursor-pointer
                    text-[var(--color-danger)]
                    opacity-60
                    transition-opacity
                    hover:opacity-100
                "
            >
                <Trash2 size={14} />
            </button>

            <span
                className="
                    text-[var(--text-label-medium)]
                    font-bold
                    text-[var(--color-text-strong)]
                "
            >
                {rowIndex}
            </span>
        </div>
    );
};

export default UtilityActionsRenderer;
