import {
    useEffect,
    useState,
} from "react";

import type { ReactNode } from "react";

import DateRangeContext from "./DateRangeContext";

import useSites from "../Sites/useSites";

import { buildCalendar } from "./utility/calendar/buildCalendar";

const LOOKBACK_MONTHS = 3;
const LOOKAHEAD_MONTHS = 12;

interface DateRangeProviderProps {
    children: ReactNode;
}

function getNowInTimezone(
    timezone: string
): Date {
    const now = new Date();

    const formatter = new Intl.DateTimeFormat(
        "en-US",
        {
            timeZone: timezone,
            hour12: false,

            year: "numeric",
            month: "2-digit",
            day: "2-digit",

            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        }
    );

    const parts =
        formatter.formatToParts(now);

    const year = Number(
        parts.find(
            (part) => part.type === "year"
        )?.value
    );

    const month = Number(
        parts.find(
            (part) => part.type === "month"
        )?.value
    );

    const day = Number(
        parts.find(
            (part) => part.type === "day"
        )?.value
    );

    const hour = Number(
        parts.find(
            (part) => part.type === "hour"
        )?.value
    );

    const minute = Number(
        parts.find(
            (part) => part.type === "minute"
        )?.value
    );

    const second = Number(
        parts.find(
            (part) => part.type === "second"
        )?.value
    );

    return new Date(
        Date.UTC(
            year,
            month - 1,
            day,
            hour,
            minute,
            second
        )
    );
}

function snapToSunday(
    date: Date
): Date {
    const result = new Date(date);

    result.setDate(
        result.getDate() -
            result.getDay()
    );

    result.setHours(
        0, 0, 0, 0
    );

    return result;
}

const DateRangeProvider = ({
    children,
}: DateRangeProviderProps) => {
    const {
        subsites,
        currentSubsite,
    } = useSites();

    const timezone =
        subsites.find(
            (subsite) =>
                subsite.id === currentSubsite
        )?.timeZone ?? null;

    const [
        startDate,
        setStartDate,
    ] = useState<Date | null>(null);

    const [
        endDate,
        setEndDate,
    ] = useState<Date | null>(null);


    const calendar = buildCalendar({
        startDate,
        endDate,
    });

    useEffect(() => {
        if (!timezone) {
            return;
        }

        let intervalId:
            | ReturnType<
                  typeof setInterval
              >
            | null = null;

        const recalculateDateRange =
            () => {
                const now =
                    getNowInTimezone(
                        timezone
                    );

                const targetStart =
                    new Date(now);

                targetStart.setMonth(
                    targetStart.getMonth() -
                        LOOKBACK_MONTHS
                );

                const targetEnd =
                    new Date(now);

                targetEnd.setMonth(
                    targetEnd.getMonth() +
                        LOOKAHEAD_MONTHS
                );

                setStartDate(
                    snapToSunday(
                        targetStart
                    )
                );

                setEndDate(
                    snapToSunday(
                        targetEnd
                    )
                );
            };

        recalculateDateRange();

        const now =
            getNowInTimezone(
                timezone
            );

        const nextMidnight =
            new Date(now);

        nextMidnight.setDate(
            nextMidnight.getDate() + 1
        );

        nextMidnight.setHours(
            0, 0, 0, 0
        );

        const msUntilMidnight =
            nextMidnight.getTime() -
            now.getTime();

        const jitter =
            Math.random() * 10000;

        const timeoutId =
            setTimeout(() => {
                recalculateDateRange();

                intervalId =
                    setInterval(
                        recalculateDateRange,
                        24 * 60 * 60 * 1000
                    );
            }, msUntilMidnight + jitter);

        return () => {
            clearTimeout(timeoutId);

            if (
                intervalId !== null
            ) {
                clearInterval(
                    intervalId
                );
            }
        };
    }, [
        currentSubsite,
        timezone,
    ]);

    return (
        <DateRangeContext.Provider
            value={{
                startDate,
                endDate,

                setStartDate,
                setEndDate,

                calendar,

                lookbackMonths: LOOKBACK_MONTHS,
                lookaheadMonths: LOOKAHEAD_MONTHS,
            }}
        >
            {children}
        </DateRangeContext.Provider>
    );
};

export default DateRangeProvider;