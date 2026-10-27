import type { ReactNode } from "react";

import {
    Group,
    Panel,
} from "react-resizable-panels";

interface OnePaneLayoutProps {
    top?: ReactNode,
    content: ReactNode,
}

const OnePaneLayout = ({
    top,
    content,
}: OnePaneLayoutProps) => {
    return (
        <div className="layout flex min-h-0 min-w-0 flex-1 flex-col overflow-auto p-sm">
            {top}

            <Group
                orientation="horizontal"
                className="layout-body flex-1 py-sm"
            >
                <Panel
                    defaultSize="100%"
                    className="flex min-h-0 flex-col p-lg"
                >
                    {content}
                </Panel>
            </Group>
        </div>
    );
};

export default OnePaneLayout;