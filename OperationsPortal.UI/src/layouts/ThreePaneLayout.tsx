import type { ReactNode } from "react";

import {
    Group,
    Panel,
    Separator,
} from "react-resizable-panels";

interface ThreePaneLayoutProps {
    top?: ReactNode;

    left: ReactNode;
    center: ReactNode;
    right: ReactNode;

    leftDefaultSize?: string;
    centerDefaultSize?: string;
    rightDefaultSize?: string;

    leftMinSize?: number;
    centerMinSize?: number;
    rightMinSize?: number;
}

const ThreePaneLayout = ({
    top,

    left,
    center,
    right,

    leftDefaultSize = "30%",
    centerDefaultSize = "20%",
    rightDefaultSize = "50%",

    leftMinSize = 225,
    centerMinSize = 250,
    rightMinSize = 375,
}: ThreePaneLayoutProps) => {
    const minimumWidth =
        leftMinSize +
        centerMinSize +
        rightMinSize;

    return (
        <div className="layout flex min-h-0 flex-1 flex-col p-sm">
            {top}

            <div className="layout-body min-h-0 flex-1 overflow-x-auto">
                <div
                    className="h-full"
                    style={{
                        minWidth: `${minimumWidth}px`,
                    }}
                >
                    <Group
                        orientation="horizontal"
                        className="pane-row h-full py-sm"
                    >
                        <Panel
                            defaultSize={leftDefaultSize}
                            minSize={leftMinSize}
                            className="flex min-h-0 flex-col p-lg"
                        >
                            {left}
                        </Panel>

                        <Separator className="w-px bg-primary" />

                        <Panel
                            defaultSize={centerDefaultSize}
                            minSize={centerMinSize}
                            className="flex min-h-0 flex-col p-lg"
                        >
                            {center}
                        </Panel>

                        <Separator className="w-px bg-primary" />

                        <Panel
                            defaultSize={rightDefaultSize}
                            minSize={rightMinSize}
                            className="flex min-h-0 flex-col p-lg"
                        >
                            {right}
                        </Panel>
                    </Group>
                </div>
            </div>
        </div>
    );
};

export default ThreePaneLayout;