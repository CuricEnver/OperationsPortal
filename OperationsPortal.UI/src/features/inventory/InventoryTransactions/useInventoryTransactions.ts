import { useState, useMemo } from "react";

/*
selectedTransaction
transactionFilter

handleSelectTransaction
handleCreateTransaction
handleSaveTransaction
handleDeleteTransaction
*/

interface InventoryTransaction {
    id: number | null,
    transactionType: string | null,

    itemId: number | null,
    locationId: number | null,

    quantity: number | null,

    reference: string,
    notes: string,

    isDeleted: boolean
}

const transactions: InventoryTransaction[] = [
    {
        id: 1,
        transactionType: "receipt",
        itemId: 1,
        locationId: 1,
        quantity: 500,
        reference: "PO-10025",
        notes: "",
        isDeleted: false
    },
    {
        id: 2,
        transactionType: "issue",
        itemId: 1,
        locationId: 1,
        quantity: 30,
        reference: "WO-20001",
        notes: "",
        isDeleted: false
    },
    {
        id: 3,
        transactionType: "transfer",
        itemId: 2,
        locationId: 2,
        quantity: 100,
        reference: "MOVE-001",
        notes: "",
        isDeleted: false
    },
];

const useInventoryTransactions = () => {
    const [selectedTransaction, setSelectedTransaction] = useState<InventoryTransaction | null>(null);
    const [transactionFilter, setTransactionFilter] = useState("");

    const filterTransactions = useMemo(() => {
        return transactions.filter(
            (transaction) => 
                !transaction.isDeleted &&
                transaction.reference
                    .toLowerCase()
                    .includes(transactionFilter.toLowerCase())
        );
    }, [transactionFilter]);

    return {

    };
};

export default useInventoryTransactions;