import { createContext } from "react";

import type {
    CalendarMonth,
} from "./utility/calendar/types";

export interface DateRangeContextValue {
    startDate: Date | null;
    endDate: Date | null;

    setStartDate: (
        date: Date | null
    ) => void;

    setEndDate: (
        date: Date | null
    ) => void;

    calendar: CalendarMonth[];

    lookbackMonths: number;
    lookaheadMonths: number;
}

const DateRangeContext =
    createContext<
        DateRangeContextValue | undefined
    >(undefined);

export default DateRangeContext;