import { Search } from "lucide-react";

import TwoPaneLayout from "../../../layouts/TwoPaneLayout";

import Region from "../../../layouts/components/Region/Region";
import Section from "../../../layouts/components/Section/Section";

import Header from "../../../components/composite/Header";
import Footer from "../../../components/composite/Footer";

import List from "../../../components/composite/List/List";
import ListItem from "../../../components/composite/List/components/ListItem";

import Button from "../../../components/primitive/Button";

import MaterialReviewItem from "./components/MaterialReviewItem";

interface AcquisitionOption {
    id: number;

    type: "purchase" | "transfer";

    source: string;

    quantity: number;

    leadTimeDays: number;

    unitCost?: number;

    availableQuantity?: number;
}

interface MaterialRequirement {
    id: number;

    itemNumber: string;

    description: string;

    requiredQuantity: number;
    availableQuantity: number;

    shortageQuantity: number;
    remoteQuantity?: number;

    needDate: string;

    status:
        | "shortage"
        | "action-issued"
        | "resolved";

    recommendedOptionId: number | null;

    selectedOptionId: number | null;

    actionReference: string | null;

    acquisitionOptions: AcquisitionOption[];
}

const materialRequirements: MaterialRequirement[] = [
    {
        id: 1,

        itemNumber: "100001",
        description: "Bearing",

        requiredQuantity: 200,
        availableQuantity: 180,

        shortageQuantity: 20,

        needDate: "2026-11-10",

        status: "shortage",

        recommendedOptionId: 3,

        selectedOptionId: null,

        actionReference: null,

        acquisitionOptions: [
            {
                id: 1,

                type: "purchase",

                source: "Fastenal",

                quantity: 20,

                leadTimeDays: 2,

                unitCost: 1.25,
            },

            {
                id: 2,

                type: "transfer",

                source: "Warehouse B",

                quantity: 20,

                availableQuantity: 500,

                leadTimeDays: 5,
            },

            {
                id: 3,

                type: "transfer",

                source: "Warehouse C",

                quantity: 20,

                availableQuantity: 40,

                leadTimeDays: 1,
            },
        ],
    },
    {
        id: 2,

        itemNumber: "100002",
        description: "Rotor",

        requiredQuantity: 100,
        availableQuantity: 40,

        remoteQuantity: 80,
        shortageQuantity: 60,

        needDate: "2026-11-10",

        status: "shortage",

        recommendedOptionId: 1,

        selectedOptionId: null,

        actionReference: null,

        acquisitionOptions: [
            {
                id: 1,

                type: "transfer",

                source: "Building B",

                quantity: 60,

                availableQuantity: 80,

                leadTimeDays: 2,
            },

            {
                id: 2,

                type: "purchase",

                source: "Mouser",

                quantity: 60,

                leadTimeDays: 4,

                unitCost: 125.00,
            },
        ],
    },
    {
        id: 3,

        itemNumber: "100003",
        description: "Housing",

        requiredQuantity: 100,
        availableQuantity: 150,

        shortageQuantity: 0,

        needDate: "2026-11-10",

        status: "resolved",

        recommendedOptionId: null,

        selectedOptionId: null,

        actionReference: null,

        acquisitionOptions: [],
    },
];

const statusPriority: Record<
    MaterialRequirement["status"],
    number
> = {
    shortage: 0,
    "action-issued": 1,
    resolved: 2,
};

const sortedRequirements = [...materialRequirements].sort(
    (a, b) =>
        statusPriority[a.status] -
        statusPriority[b.status],
);

const issueCount = materialRequirements.filter(
    (item) => item.status === "shortage",
).length;

const resolvedCount = materialRequirements.filter(
    (item) => item.status === "resolved",
).length;

const reviewComplete = materialRequirements.every(
    (item) => item.status === "resolved",
);

const MaterialReview = () => {
    return (
        <TwoPaneLayout
            top={
                <Header
                    title="Material Review"
                    icon={Search}
                    subtitle="Review shortages, resolve acquisition requirements, and approve production readiness."
                />
            }
            left={
                <Region>
                    <Header
                        title="Material Review Tickets"
                        size="medium"
                    />

                    <Section scrollable>
                        <List>
                            <ListItem
                                isSelected
                                title="Ford • Motor Assembly"
                                description="2 material shortages require action."
                                statusColor="var(--color-danger)"
                            />

                            <ListItem
                                title="GM • Gearbox Assembly"
                                description="Transfer options available."
                                statusColor="#f59e0b"
                            />

                            <ListItem
                                title="Tesla • Controller Module"
                                description="Material review approved."
                                statusColor="var(--color-success)"
                            />
                        </List>
                    </Section>
                </Region>
            }
            right={
                <>
                    <Region>
                        <Header
                            title="Ford • Motor Assembly"
                            subtitle="100 Units • Commit Date: Nov 15 • Forecast Date: Nov 20"
                            size="medium"
                        />

                        <Section>
                            <div className="grid grid-cols-4 gap-lg">
                                <div>
                                    <div className="text-label-medium text-text-subtle">
                                        Build Requested
                                    </div>

                                    <div className="text-header-medium font-semibold">
                                        100
                                    </div>
                                </div>

                                <div>
                                    <div className="text-label-medium text-text-subtle">
                                        Buildable Today
                                    </div>

                                    <div className="text-header-medium font-semibold">
                                        90
                                    </div>
                                </div>

                                <div>
                                    <div className="text-label-medium text-text-subtle">
                                        Open Issues
                                    </div>

                                    <div className="text-header-medium font-semibold">
                                        {issueCount}
                                    </div>
                                </div>

                                <div>
                                    <div className="text-label-medium text-text-subtle">
                                        Resolved
                                    </div>

                                    <div className="text-header-medium font-semibold">
                                        {resolvedCount} /{" "}
                                        {materialRequirements.length}
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Header
                            title="Material Requirements"
                            size="small"
                        />

                        <Section scrollable>
                            <div>
                                {sortedRequirements.map((item) => {
                                    const recommendedOption =
                                        item.acquisitionOptions.find(
                                            (
                                                option,
                                            ) =>
                                                option.id ===
                                                item.recommendedOptionId,
                                        );

                                    const suggestedAction =
                                        recommendedOption
                                            ? `${recommendedOption.type === "purchase"
                                                ? "Purchase"
                                                : "Transfer"} • ${recommendedOption.source}`
                                            : "None";

                                    return (
                                        <MaterialReviewItem
                                            key={item.id}
                                            itemNumber={
                                                item.itemNumber
                                            }
                                            description={
                                                item.description
                                            }
                                            requiredQuantity={
                                                item.requiredQuantity
                                            }
                                            availableQuantity={
                                                item.availableQuantity
                                            }
                                            remoteQuantity={
                                                item.remoteQuantity
                                            }
                                            shortageQuantity={
                                                item.shortageQuantity
                                            }
                                            status={
                                                item.status
                                            }
                                            suggestedAction={
                                                suggestedAction
                                            }
                                            acquisitionOptions={
                                                item.acquisitionOptions
                                            }
                                        />
                                    );
                                })}
                            </div>
                        </Section>
                    </Region>

                    <Footer>
                        <Button
                            disabled={!reviewComplete}
                        >
                            Approve Material Review
                        </Button>
                    </Footer>
                </>
            }
        />
    );
};

export default MaterialReview;