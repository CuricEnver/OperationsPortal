export interface NavLink {
    label: string;
    path: string;
    description?: string;
}

export const applicationLinks: NavLink[] = [
    {
        label: "Operations Summary",
        path: "/",
    },
];

export const inventoryLinks: NavLink[] = [
    {
        label: "On Hand",
        path: "/inventory",
        description: "View inventory quantities by location.",
    },
    {
        label: "Catalog",
        path: "/inventory/catalog",
        description: "Manage inventory items and item definitions.",
    },
    {
        label: "Locations",
        path: "/inventory/locations",
        description: "Configure the physical inventory hierarchy.",
    },
    {
        label: "Transactions",
        path: "/inventory/transactions",
        description: "Review inventory movements and adjustments.",
    },
];

export const managementLinks: NavLink[] = [
    {
        label: "Master Data",
        path: "/master-data",
    },
];

export const bomLinks: NavLink[] = [
    {
        label: "BOM Manager",
        path: "/bom/manager",
        description: "Create and maintain bill of material structures.",
    },
    {
        label: "BOM Analysis",
        path: "/bom/analysis",
        description: "Analyze component usage and assembly requirements.",
    },
];

export const planningLinks: NavLink[] = [
    {
        label: "Ship Scheduler",
        path: "/planning/ship-scheduler",
        description: "Plan customer shipments and forecast future demand."
    },
    {
        label: "Build Scheduler",
        path: "/planning/build-scheduler",
        description: "Plan production runs and schedule assembly work orders."
    },
    {
        label:"Material Review",
        path: "/planning/material-review",
        description: "Review material availability, resolve shortages, and validate forecast feasibility."
    },
    {
        label: "Work Orders",
        path: "/planning/work-orders",
        description: "Execute production plans, track assembly progress, and complete work orders."
    }
];