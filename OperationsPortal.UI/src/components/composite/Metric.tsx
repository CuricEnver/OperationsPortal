import Label from "../primitive/Label";

interface MetricProps {
    label: string;
    value: string | number;
    align?: "left" | "center";
    size?: "small" | "medium" | "large";
}

const sizeStyles = {
    small: {
        value: "text-metric-small",
    },
    medium: {
        value: "text-metric-medium",
    },
    large: {
        value: "text-metric-large",
    },
};

const Metric = ({
    label,
    value,
    align = "left",
    size = "large",
}: MetricProps) => {
    const alignment =
        align === "center"
            ? "items-center text-center"
            : "items-start text-left";

    const styles = sizeStyles[size];

    return (
        <div className={`flex flex-col gap-xs ${alignment}`}>
            <Label size="medium">
                {label}
            </Label>

            <div
                className={`
                    font-semibold
                    text-primary
                    select-none
                    ${styles.value}
                `}
            >
                {value}
            </div>
        </div>
    );
};

export default Metric;