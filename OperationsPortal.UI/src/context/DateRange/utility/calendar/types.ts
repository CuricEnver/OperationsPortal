export interface CalendarDay {
    date: Date;
}

export interface CalendarWeek {
    weekNumber: number;

    startDate: Date;
    endDate: Date;

    days: CalendarDay[];
}

export interface CalendarMonth {
    label: string;

    month: number;
    year: number;

    startDate: Date;
    endDate: Date;

    weeks: CalendarWeek[];
}