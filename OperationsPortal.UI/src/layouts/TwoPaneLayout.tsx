import type { ReactNode } from "react";

import {
    Group,
    Panel,
    Separator,
} from "react-resizable-panels";

interface TwoPaneLayoutProps {
    top?: ReactNode;

    left: ReactNode;
    right: ReactNode;

    leftDefaultSize?: string;
    rightDefaultSize?: string;

    leftMinSize?: number;
    rightMinSize?: number;
}

const TwoPaneLayout = ({
    top,

    left,
    right,

    leftDefaultSize = "35%",
    rightDefaultSize = "70%",

    leftMinSize = 280,
    rightMinSize = 520,
}: TwoPaneLayoutProps) => {
    const minimumWidth =
        leftMinSize +
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

export default TwoPaneLayout;