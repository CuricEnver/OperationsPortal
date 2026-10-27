import { useMemo, useState } from "react";

interface InventoryLocation {
    id: number | null;
    name: string;
    description: string;
    locationTypeId: number | null;
    parentLocationId: number | null;
}

interface InventoryLocationNode {
    id: number;
    label: string;
    children?: InventoryLocationNode[];
}

const locationTree: InventoryLocationNode[] = [
    {
        id: 1,
        label: "Prototype Engineering Lab",
        children: [
            {
                id: 2,
                label: "Warehouse A",
                children: [
                    {
                        id: 3,
                        label: "Section A",
                        children: [
                            {
                                id: 4,
                                label: "Rack A",
                                children: [
                                    {
                                        id: 5,
                                        label: "Shelf A",
                                    },
                                    {
                                        id: 6,
                                        label: "Shelf B",
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        id: 7,
                        label: "Section B",
                    },
                ],
            },
        ],
    },
];

const locationTypes = [
    {
        id: 1,
        label: "Warehouse",
    },
    {
        id: 2,
        label: "Section",
    },
    {
        id: 3,
        label: "Rack",
    },
    {
        id: 4,
        label: "Shelf",
    },
];

const parentLocations = [
    {
        id: 1,
        label: "Prototype Engineering Lab",
    },
    {
        id: 2,
        label: "Warehouse A",
    },
    {
        id: 3,
        label: "Section A",
    },
    {
        id: 4,
        label: "Rack A",
    },
];

const locations: InventoryLocation[] = [
    {
        id: 1,
        name: "Prototype Engineering Lab",
        description: "Top level inventory location",
        locationTypeId: null,
        parentLocationId: null,
    },
    {
        id: 2,
        name: "Warehouse A",
        description: "Primary warehouse",
        locationTypeId: 1,
        parentLocationId: 1,
    },
    {
        id: 3,
        name: "Section A",
        description: "Warehouse storage section",
        locationTypeId: 2,
        parentLocationId: 2,
    },
    {
        id: 4,
        name: "Rack A",
        description: "Primary storage rack",
        locationTypeId: 3,
        parentLocationId: 3,
    },
    {
        id: 5,
        name: "Shelf A",
        description: "Upper shelf",
        locationTypeId: 4,
        parentLocationId: 4,
    },
    {
        id: 6,
        name: "Shelf B",
        description: "Lower shelf",
        locationTypeId: 4,
        parentLocationId: 4,
    },
    {
        id: 7,
        name: "Section B",
        description: "Secondary warehouse section",
        locationTypeId: 2,
        parentLocationId: 2,
    },
];

const useInventoryLocations = () => {
    const [selectedLocation, setSelectedLocation] =
        useState<InventoryLocation | null>(null);

    const [locationFilter, setLocationFilter] =
        useState("");

    const filteredLocations = useMemo(() => {
        return locations.filter((location) =>
            location.name
                .toLowerCase()
                .includes(locationFilter.toLowerCase())
        );
    }, [locationFilter]);

    const handleSelectLocation = (
        nodeId: number,
    ) => {
        const location = locations.find(
            (location) => location.id === nodeId,
        );

        if (!location) {
            return;
        }

        setSelectedLocation(location);
    };

    const handleCreateLocation = () => {
        const newLocation: InventoryLocation = {
            id: null,
            name: "",
            description: "",
            locationTypeId: null,
            parentLocationId: null,
        };

        setSelectedLocation(newLocation);
    };

    const handleSaveLocation = () => {
        if (!selectedLocation) {
            return;
        }

        console.log(
            "Save Location:",
            selectedLocation,
        );
    };

    const handleDeleteLocation = () => {
        if (!selectedLocation) {
            return;
        }

        console.log(
            "Delete Location:",
            selectedLocation,
        );
    };

    return {
        locationTree,
        locationTypes,
        parentLocations,

        filteredLocations,

        selectedLocation,
        setSelectedLocation,

        locationFilter,
        setLocationFilter,

        handleSelectLocation,
        handleCreateLocation,
        handleSaveLocation,
        handleDeleteLocation,
    };
};

export default useInventoryLocations;