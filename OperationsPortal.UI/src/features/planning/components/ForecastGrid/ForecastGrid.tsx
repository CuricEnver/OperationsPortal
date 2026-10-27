import { AgGridReact } from "ag-grid-react";
import { themeQuartz } from "ag-grid-community";

import { useForecastGridColumns } from "./hooks/useForecastGridColumns";

import type {
    ForecastColumn,
    ForecastRow,
} from "./types/types";

import type { CalendarMonth } from "../../../../context/DateRange/utility/calendar/types";

interface ForecastGridProps {
    leftColumns: ForecastColumn[],
    calendar: CalendarMonth[],
    rows: ForecastRow[],

    onCellClicked?: () => void
}

const myTheme = themeQuartz.withParams({
    fontSize: "12px",
    spacing: 4,
});

const ForecastGrid = ({
    leftColumns,
    calendar,
    rows,
    onCellClicked
}: ForecastGridProps) => {
    const columnDefs =
        useForecastGridColumns({
            leftColumns,
            calendar,
        });

    return (
        <AgGridReact
            theme={myTheme}
            rowData={rows}
            columnDefs={columnDefs}
            onCellClicked={onCellClicked}
            suppressMovableColumns={true}
        />
    );
};

export default ForecastGrid;