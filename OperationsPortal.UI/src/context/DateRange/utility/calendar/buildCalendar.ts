import type {
    CalendarDay,
    CalendarMonth,
    CalendarWeek,
} from "./types";

interface BuildCalendarProps {
    startDate: Date | null;
    endDate: Date | null;
}

function getWeekNumber(
    date: Date
): number {
    const target = new Date(date);

    const year =
        target.getFullYear();

    const firstDayOfYear =
        new Date(year, 0, 1);

    const dayOfWeek =
        firstDayOfYear.getDay();

    const firstSunday =
        dayOfWeek === 0
            ? firstDayOfYear
            : new Date(
                  year,
                  0,
                  1 + (7 - dayOfWeek)
              );

    if (target < firstSunday) {
        return getWeekNumber(
            new Date(
                year - 1,
                11,
                31
            )
        );
    }

    const msDiff =
        target.getTime() -
        firstSunday.getTime();

    return (
        Math.floor(
            msDiff /
                (7 *
                    24 *
                    60 *
                    60 *
                    1000)
        ) + 1
    );
}

export function buildCalendar({
    startDate,
    endDate,
}: BuildCalendarProps): CalendarMonth[] {
    if (
        !startDate ||
        !endDate
    ) {
        return [];
    }

    const calendar: CalendarMonth[] =
        [];

    const currentWeekStart =
        new Date(startDate);

    while (
        currentWeekStart < endDate
    ) {
        const weekStart =
            new Date(
                currentWeekStart
            );

        const weekEnd =
            new Date(
                currentWeekStart
            );

        weekEnd.setDate(
            weekEnd.getDate() + 6
        );

        const month =
            weekStart.getMonth();

        const year =
            weekStart.getFullYear();

        const label =
            `${weekStart.toLocaleString(
                "default",
                {
                    month: "long",
                }
            )} ${year}`;

        let monthEntry =
            calendar.find(
                (
                    calendarMonth
                ) =>
                    calendarMonth
                        .month ===
                        month &&
                    calendarMonth
                        .year ===
                        year
            );

        if (!monthEntry) {
            monthEntry = {
                label,
                month,
                year,

                startDate: new Date(
                    weekStart.getFullYear(),
                    weekStart.getMonth(),
                    1
                ),

                endDate: new Date(
                    weekStart.getFullYear(),
                    weekStart.getMonth() + 1,
                    0
                ),

                weeks: [],
            };

            calendar.push(
                monthEntry
            );
        }

        const days: CalendarDay[] =
            [];

        for (
            let i = 0;
            i < 7;
            i++
        ) {
            const day =
                new Date(
                    weekStart
                );

            day.setDate(
                day.getDate() + i
            );

            days.push({
                date: day,
            });
        }

        const week: CalendarWeek =
            {
                weekNumber:
                    getWeekNumber(
                        weekStart
                    ),

                startDate:
                    weekStart,

                endDate:
                    weekEnd,

                days,
            };

        monthEntry.weeks.push(
            week
        );

        currentWeekStart.setDate(
            currentWeekStart.getDate() +
                7
        );
    }

    return calendar;
}