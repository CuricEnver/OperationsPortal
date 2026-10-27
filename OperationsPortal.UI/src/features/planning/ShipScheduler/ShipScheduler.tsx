import { useState } from "react";
import { Truck } from "lucide-react";

import OnePaneLayout from "../../../layouts/OnePaneLayout";
import Region from "../../../layouts/components/Region/Region";
import Header from "../../../components/composite/Header";
import Button from "../../../components/primitive/Button";
import AddLineItem from "../components/AddLineItem/AddLineItem";

import ForecastGrid from "../components/ForecastGrid/ForecastGrid";
import ForecastManagement from "../components/ForecastManagement/ForecastManagement";

import useSites from "../../../context/Sites/useSites";
import useDateRange from "../../../context/DateRange/useDateRange";

import useShipScheduler from "./useShipScheduler";

const leftColumns = [
    {
        key: "customer",
        label: "Customer",
    },
    {
        key: "itemNumber",
        label: "Part Number",
    },
    {
        key: "description",
        label: "Description",
    },
];

const rows = [
    {
        id: 1,
        customer: "Ford",
        itemNumber: "200001",
        description: "Motor Assembly",
    },
    {
        id: 2,
        customer: "GM",
        itemNumber: "200002",
        description: "Gearbox Assembly",
    },
];

const ShipScheduler = () => {

    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
    } = useSites();

    const {
        isOpen,
        openOverlay,
        closeOverlay
    } = useShipScheduler();

    const [isAddLineItemOpen, setIsAddLineItemOpen] = useState(false);

    const {
        calendar,
    } = useDateRange();

    const activeSite = sites.find(
        (site) => site.id === currentSite
    );

    const activeSubsite = subsites.find(
        (subsite) => subsite.id === currentSubsite
    );

    const siteContext = [
        activeSite?.name,
        activeSubsite?.name,
    ]
        .filter(Boolean)
        .join(" • ");

    const subtitleText = siteContext
        ? `${siteContext} — Schedule and manage outgoing shipments.`
        : "Schedule and manage outgoing shipments.";

    return (
        <>
            <OnePaneLayout
                top={
                    <Header
                        title="Ship Scheduler"
                        subtitle={subtitleText}
                        icon={Truck}
                        actions={
                            <Button
                                size="small"
                                onClick={() => setIsAddLineItemOpen(true)}
                            >
                            + Add Line Item
                            </Button>
                        }
                    />
                }
                content={
                    <Region
                    >
                        <ForecastGrid
                            leftColumns={leftColumns}
                            calendar={calendar}
                            rows={rows}
                            onCellClicked={openOverlay}
                        />
                    </Region>
                }
            />

            {isOpen && (
                <ForecastManagement
                    onClose={closeOverlay}
                />
            )}

            {isAddLineItemOpen && (
                <AddLineItem 
                    onClose={() => setIsAddLineItemOpen(false)}
                />
            )}
        </>
    );
};

export default ShipScheduler;