import { useMemo } from "react";
import UtilityActionsRenderer from "../components/UtilityActionsRenderer.tsx/UtilityActionsRenderer";

export const useForecastGridColumns = ({
    leftColumns,
    calendar,
}) => {
    return useMemo(() => {
        const leftColumnDefs = {
            headerName: "Forecast Details",
            
            children: [ 
                {
                    headerName: "#",
                    colId: "UtilityActions",
                    field:"displayIndex",

                    pinned: "left",
                    lockPinned: true,

                    width: 80,
                    rowDrag: true,

                    valueGetter: (params) =>
                    (params.node.rowIndex ?? 0) + 1,
                    
                    cellRenderer: UtilityActionsRenderer,
                },
                
                ...leftColumns.map((column) => ({
                    field: column.key,
                    headerName: column.label,
                    pinned: "left",
                    width: column.width ?? 150,
                    sortable: true,
                    filter: true,
                    resizable: true,
                })),
            ],
        };

        let columnIndex = 1;

        const rightColumnDefs = calendar.map(
            (month) => ({
                headerName: month.label,

                children: month.weeks.map(
                    (week) => ({
                        field: `col${columnIndex++}`,

                        headerName: `W${week.weekNumber}`,

                        sortable: true,
                        filter: true,
                        resizable: true,

                        width: 90,
                    })
                ),
            })
        );

        return [
            leftColumnDefs,
            ...rightColumnDefs,
        ];
    }, [
        leftColumns,
        calendar,
    ]);
};