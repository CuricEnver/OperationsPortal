import type { ReactNode } from "react";

import TreeNode from "./TreeNode/TreeNode";

export interface TreeNodeData {
    id: string | number,
    label: ReactNode,
    children?: TreeNodeData[],
}

interface TreeProps {
    nodes: TreeNodeData[],
    selectedId?: string | number,
    onSelect?: (node: TreeNodeData) => void,
}

const Tree = ({
    nodes,
    selectedId,
    onSelect,
}: TreeProps) => {
    return (
        <div className="flex w-full flex-col">
            {nodes.map((node) => (
                <TreeNode
                    key={node.id}
                    node={node}
                    selectedId={selectedId}
                    onSelect={onSelect}
                />
            ))}
        </div>
    );
};

export default Tree;