import { useState } from "react";
import { ChevronRight } from "lucide-react";

import type { TreeNodeData } from "../Tree";

interface TreeNodeProps {
    node: TreeNodeData,
    selectedId?: string | number,
    onSelect?: (node: TreeNodeData) => void,
    depth?: number,
}

const TreeNode = ({
    node,
    selectedId,
    onSelect,
    depth = 0,
}: TreeNodeProps) => {
    const [isExpanded, setIsExpanded] = useState(true);

    const isSelected = node.id === selectedId;
    const hasChildren = Boolean(node.children?.length);

    return (
        <div>
            <div
                className={`
                    flex
                    min-h-8
                    items-center
                    gap-xs
                    p-sm
                    text-medium
                    transition-colors
                    hover:bg-surface-subtle
                    ${onSelect
                        ? "cursor-pointer select-none"
                        : ""
                    }
                    ${isSelected
                        ? "bg-primary-light font-semibold text-primary"
                        : "font-medium text-text-strong"
                    }
                `}
                style={{
                    paddingLeft: `${8 + depth * 24}px`,
                }}
                onClick={() => onSelect?.(node)}
            >
                {hasChildren && (
                    <button
                        type="button"
                        className="
                            flex
                            items-center
                            justify-center
                            text-text-subtle
                        "
                        onClick={(event) => {
                            event.stopPropagation();
                            setIsExpanded((current) => !current);
                        }}
                    >
                        <ChevronRight
                            className={`
                                size-4
                                transition-transform
                                duration-200
                                ${isExpanded ? "rotate-90" : "rotate-0"}
                            `}
                        />
                    </button>
                )}

                <span>
                    {node.label}
                </span>
            </div>

            {hasChildren && isExpanded && (
                <>
                    {node.children?.map((child) => (
                        <TreeNode
                            key={child.id}
                            node={child}
                            selectedId={selectedId}
                            onSelect={onSelect}
                            depth={depth + 1}
                        />
                    ))}
                </>
            )}
        </div>
    );
};

export default TreeNode;