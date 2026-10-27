import Field from "../../../../../../components/composite/Field";

import Input from "../../../../../../components/primitive/Input";
import Selector from "../../../../../../components/primitive/Selector";

import "./ForecastRecordRow.css";

interface ForecastRecordRowProps {
    statusColor?: string;
}

const statusOptions = [
    {
        id: "ready",
        label: "Ready",
    },
    {
        id: "review",
        label: "Material Review",
    },
    {
        id: "issue",
        label: "Material Issue",
    },
    {
        id: "scheduled",
        label: "Scheduled",
    },
];

const ForecastRecordRow = ({
    statusColor = "var(--color-success)",
}: ForecastRecordRowProps) => {
    return (
        <div
            className="forecast-record-row"
            style={{
                ["--status-color" as string]: statusColor,
            }}
        >
            <div className="grid grid-cols-4 gap-lg">
                <Field label="Status">
                    <Selector
                        options={statusOptions}
                        getKey={(item) => item.id}
                        getLabel={(item) => item.label}
                        onChange={() => {}}
                    />
                </Field>

                <Field label="Quantity">
                    <Input
                        type="number"
                        value="10"
                    />
                </Field>

                <Field label="Commit Date">
                    <Input
                        type="date"
                        value="2026-08-01"
                    />
                </Field>

                <Field label="Forecast Date">
                    <Input
                        type="date"
                        value="2026-08-02"
                    />
                </Field>
            </div>

            <div className="pt-md">
                <Field label="Notes">
                    <Input
                        type="text"
                        placeholder="Add planning notes..."
                    />
                </Field>
            </div>
        </div>
    );
};

export default ForecastRecordRow;