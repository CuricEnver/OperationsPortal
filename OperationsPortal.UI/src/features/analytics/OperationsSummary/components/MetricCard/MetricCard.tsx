import type { ReactNode } from "react";

interface MetricCardProps {
    left: ReactNode,
    right: ReactNode,
};

const MetricCard = ({
    left,
    right,
}: MetricCardProps) => {
    return (
        <div className="flex min-w-0 min-h-[300px] flex-row p-md">
            <div className="shrink-0">
                {left}
            </div>

            <div className="min-w-0 flex-1 border-l border-border-light">
                {right}
            </div>
        </div>
    );
};

export default MetricCard;