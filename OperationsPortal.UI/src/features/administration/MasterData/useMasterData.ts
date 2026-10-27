import { useMemo, useState } from "react";

export interface Entity {
    id: number;
    name: string;
}

export interface MasterDataRecord {
    id: number;
    name: string;
}

const entities: Entity[] = [
    {
        id: 1,
        name: "Customers",
    },
    {
        id: 2,
        name: "Products",
    },
    {
        id: 3,
        name: "Sites",
    },
    {
        id: 4,
        name: "Subsites",
    },
    {
        id: 5,
        name: "Build Statuses",
    },
];

const mockRecords: Record<number, MasterDataRecord[]> = {
    1: [
        { id: 1, name: "Customer A" },
        { id: 2, name: "Customer B" },
        { id: 3, name: "Customer C" },
        { id: 4, name: "Customer D" },
    ],

    2: [
        { id: 1, name: "Product A" },
        { id: 2, name: "Product B" },
    ],

    3: [
        { id: 1, name: "Kokomo" },
        { id: 2, name: "Indianapolis" },
    ],

    4: [],

    5: [
        { id: 1, name: "Ready" },
        { id: 2, name: "Material Review" },
        { id: 3, name: "Build Complete" },
    ],
};

const useMasterData = () => {
    const [selectedEntity, setSelectedEntity] =
        useState<Entity | null>(null);

    const [selectedRecord, setSelectedRecord] =
        useState<MasterDataRecord | null>(null);

    const [entitySearch, setEntitySearch] =
        useState("");

    const [recordSearch, setRecordSearch] =
        useState("");

    const filteredEntities = useMemo(() => {
        return entities.filter((entity) =>
            entity.name
                .toLowerCase()
                .includes(entitySearch.toLowerCase()),
        );
    }, [entitySearch]);

    const records = useMemo(() => {
        if (!selectedEntity) {
            return [];
        }

        return (
            mockRecords[selectedEntity.id] ??
            []
        );
    }, [selectedEntity]);

    const filteredRecords = useMemo(() => {
        return records.filter((record) =>
            record.name
                .toLowerCase()
                .includes(recordSearch.toLowerCase()),
        );
    }, [records, recordSearch]);

    const handleSelectEntity = (
        entity: Entity,
    ) => {
        setSelectedEntity(entity);
        setSelectedRecord(null);
    };

    const handleSelectRecord = (
        record: MasterDataRecord,
    ) => {
        setSelectedRecord(record);
    };

    const handleCreateRecord = () => {
        const newRecord: MasterDataRecord = {
            id: Date.now(),
            name: "New Record",
        };

        setSelectedRecord(newRecord);
    };

    const handleDeleteRecord = () => {
        if (!selectedRecord) {
            return;
        }

        console.log(
            "Delete Record:",
            selectedRecord,
        );

        setSelectedRecord(null);
    };

    const handleSaveRecord = () => {
        if (!selectedRecord) {
            return;
        }

        console.log(
            "Save Record:",
            selectedRecord,
        );
    };

    return {
        entities: filteredEntities,
        records: filteredRecords,

        selectedEntity,
        selectedRecord,

        entitySearch,
        setEntitySearch,

        recordSearch,
        setRecordSearch,

        handleSelectEntity,
        handleSelectRecord,

        handleCreateRecord,
        handleDeleteRecord,
        handleSaveRecord,
    };
};

export default useMasterData;