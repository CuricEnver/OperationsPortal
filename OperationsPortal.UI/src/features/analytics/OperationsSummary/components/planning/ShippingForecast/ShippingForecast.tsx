import Header from "../../../../../../components/composite/Header";
import Label from "../../../../../../components/primitive/Label";

const ShippingForecast = () => {
    return (
        <div className="flex h-96 min-w-0 flex-1 flex-col">
            <Header
                title="Outbound Shipping Forecast"
                subtitle="Updated 10 minutes ago"
                size="small"
            />

            <div className="border-t border-border-light" />

            <div className="my-sm flex min-h-0 flex-1 items-center justify-center">
                <Label size="medium">
                    Area / Bar Chart Visualizing Daily Order Volume vs.
                    Carrier Capacity
                </Label>
            </div>
        </div>
    );
};

export default ShippingForecast;