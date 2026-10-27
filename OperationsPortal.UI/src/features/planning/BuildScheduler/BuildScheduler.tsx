import { useState } from "react";
import { Hammer } from "lucide-react";

import OnePaneLayout from "../../../layouts/OnePaneLayout";
import Region from "../../../layouts/components/Region/Region";
import Header from "../../../components/composite/Header";
import Button from "../../../components/primitive/Button";

import ForecastGrid from "../components/ForecastGrid/ForecastGrid";
import ForecastManagement from "../components/ForecastManagement/ForecastManagement";
import AddLineItem from "../components/AddLineItem/AddLineItem";

import useSites from "../../../context/Sites/useSites";
import useDateRange from "../../../context/DateRange/useDateRange";

import useBuildScheduler from "./useBuildScheduler";

const leftColumns = [
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
        itemNumber: "200001",
        description: "Motor Assembly",
    },
    {
        id: 2,
        itemNumber: "300001",
        description: "Rotor Assembly",
    },
];

const BuildScheduler = () => {
    const {
        sites,
        subsites,
        currentSite,
        currentSubsite,
    } = useSites();

    const {
        isOpen,
        openOverlay,
        closeOverlay,
    } = useBuildScheduler();

    const [isAddLineItemOpen, setIsAddLineItemOpen] =
        useState(false);

    const { calendar } = useDateRange();

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
        ? `${siteContext} — Plan and manage production assembly schedules.`
        : "Plan and manage production assembly schedules.";

    return (
        <>
            <OnePaneLayout
                top={
                    <Header
                        title="Build Scheduler"
                        subtitle={subtitleText}
                        icon={Hammer}
                        actions={
                            <Button
                                size="small"
                                onClick={() =>
                                    setIsAddLineItemOpen(true)
                                }
                            >
                                + Add Build Item
                            </Button>
                        }
                    />
                }
                content={
                    <Region>
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
                    onClose={() =>
                        setIsAddLineItemOpen(false)
                    }
                />
            )}
        </>
    );
};

export default BuildScheduler;