import { useState, useMemo } from "react"

interface InventoryItem {
    id: number | null,
    itemNumber: string,
    itemName: string,
    description: string,
    purchaseLeadTimeDays: number | null,
    assemblyLeadTimeDays: number | null,
    itemTypeId: number | null,
    unitOfMeasureId: number | null
}

const inventoryItems: InventoryItem[] = [
    {
        id: 1,
        itemNumber: "100001",
        itemName: "Hex Bolt",
        description: "General purpose hex bolt",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 1,
        unitOfMeasureId: 1,
    },
    {
        id: 2,
        itemNumber: "100002",
        itemName: "Flat Washer",
        description: "Standard flat washer",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 1,
        unitOfMeasureId: 1,
    },
    {
        id: 3,
        itemNumber: "100003",
        itemName: "Mounting Bracket",
        description: "Steel mounting bracket",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 1,
        unitOfMeasureId: 1,
    },
    {
        id: 4,
        itemNumber: "100004",
        itemName: "Control Housing",
        description: "Injection molded enclosure",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 3,
        unitOfMeasureId: 1,
    },
    {
        id: 5,
        itemNumber: "200001",
        itemName: "Motor Assembly",
        description: "Primary drive motor assembly",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 2,
        unitOfMeasureId: 1,
    },
    {
        id: 6,
        itemNumber: "200002",
        itemName: "Fastener Kit",
        description: "Standard assembly fastener kit",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 2,
        unitOfMeasureId: 1,
    },
    {
        id: 7,
        itemNumber: "300001",
        itemName: "Control Cabinet",
        description: "Finished control cabinet",
        purchaseLeadTimeDays: null,
        assemblyLeadTimeDays: null,
        itemTypeId: 3,
        unitOfMeasureId: 1,
    },
];

const useInventoryCatalog = () => {

    const [selectedItem, setSelectedItem] = useState<InventoryItem | null>(null);
    const [itemFilter, setItemFilter] = useState("");
 
    const filteredItems = useMemo(() => {
        return inventoryItems.filter((item) =>
            item.itemName
                .toLowerCase()
                .includes(itemFilter.toLowerCase()) ||
            item.itemNumber
                .toLowerCase()
                .includes(itemFilter.toLowerCase())
        );
    }, [itemFilter]);

    const handleSelectItem = ( item: InventoryItem ) => {
        setSelectedItem(item);
    };

    const handleLeadTimeChange = (
        field: "purchaseLeadTimeDays" | "assemblyLeadTimeDays",
        value: number | null,
    ) => {
        setSelectedItem((currentItem) =>
            currentItem
                ? { ...currentItem, [field]: value }
                : currentItem,
        );
    };

    const handleSaveItem = () => {
        if (!selectedItem) {
            return;
        }

        console.log(
            "Save Item:",
            selectedItem,
        );
    };


    const handleDeleteItem = () => {
        if (!selectedItem) {
            return;
        }

        console.log(
            "Delete Item:",
            selectedItem,
        );
    };
    
    const handleCreateItem = () => {
        const newItem: InventoryItem = {
            id: null,
            itemNumber: "",
            itemName: "",
            description: "",
            purchaseLeadTimeDays: null,
            assemblyLeadTimeDays: null,
            itemTypeId: null,
            unitOfMeasureId: null
        };

        setSelectedItem(newItem);
    }

    return {
        selectedItem,
        setSelectedItem,

        itemFilter,
        setItemFilter,

        filteredItems,

        handleCreateItem,
        handleDeleteItem,
        handleLeadTimeChange,
        handleSaveItem,
        handleSelectItem
    };
};

export default useInventoryCatalog;