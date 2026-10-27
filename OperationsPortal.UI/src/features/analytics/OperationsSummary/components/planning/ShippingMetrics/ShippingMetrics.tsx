import Label from "../../../../../../components/primitive/Label";

/*
    TODO:
    Add Header metadata/action slot for dashboard widgets.

    Desired layout:

    Outbound Shipping Forecast          Updated 10m ago

    Current Header component places subtitle beneath title,
    but forecast widgets need contextual metadata aligned right.

    Use Metric/Label/etc for metrics.
*/

const ShippingMetrics = () => {
    return (
        <div className="flex w-80 flex-col gap-md p-md">
            {/* On-Time Dispatch */}
            <div
                className="
                    mt-xssm
                    flex
                    flex-col
                    border-b
                    border-border-light
                    p-md
                "
                style={{
                    borderLeft: "3px solid #22c55e",
                }}
            >
                <div className="flex items-center justify-between">
                    <Label size="medium">
                        On-Time Dispatch
                    </Label>
                </div>

                <div className="my-xssm text-header-large font-semibold text-primary">
                    98.4%
                </div>

                <Label size="small">
                    +1.2% vs last week
                </Label>
            </div>

            {/* Pending Shipments */}
            <div
                className="
                    mt-xssm
                    flex
                    flex-col
                    border-b
                    border-border-light
                    p-md
                "
                style={{
                    borderLeft: "3px solid #3b82f6",
                }}
            >
                <div className="flex items-center justify-between">
                    <Label size="medium">
                        Pending Shipments
                    </Label>
                </div>

                <div className="my-xssm text-header-large font-semibold text-primary">
                    142
                </div>

                <Label size="small">
                    38 scheduled today
                </Label>
            </div>

            {/* Backorders */}
            <div
                className="
                    mt-xssm
                    flex
                    flex-col
                    border-b
                    border-border-light
                    p-md
                "
                style={{
                    borderLeft: "3px solid #f59e0b",
                }}
            >
                <div className="flex items-center justify-between">
                    <Label size="medium">
                        Backorders
                    </Label>
                </div>

                <div className="my-xssm text-header-large font-semibold text-primary">
                    12
                </div>

                <Label size="small">
                    Requires review
                </Label>
            </div>
        </div>
    );
};

export default ShippingMetrics;