import Metric from "../../../../../components/composite/Metric";

interface SummaryMetricProps {
    label: string;
    value: string;
}

const SummaryMetric = ({
    label,
    value,
}: SummaryMetricProps) => {
    return (
        <Metric
            label={label}
            value={value}
            align="center"
            size="large"
        />
    );
};

export default SummaryMetric;