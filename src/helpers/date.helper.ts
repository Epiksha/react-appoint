import dayjs, { Dayjs } from "dayjs";

import { ICalendarHeader, IColumn, TRange, TRangeType } from "../models/date";
import { ITimes } from "../models/times";

export const generateTimedColumns = (
    headers: ICalendarHeader[],
    times: ITimes,
    rangeType: TRangeType,
) => {
    let items: IColumn[] = [];

    const endTime = dayjs().startOf("day").add(times.end, "hour");
    let tempTime = dayjs().startOf("day").add(times.start, "hour");

    while (tempTime.isBefore(endTime) || tempTime.isSame(endTime)) {
        const columns: IColumn[] = [{
            isTimeColumn: true,
            date: tempTime,
            key: tempTime.format("YYYYMMDDHH:mm") + "-label",
            label: tempTime.format("HH:mm a"),
        }];

        if (rangeType === "week") {
            headers.forEach(header => {
                const newTime = header.date.add(tempTime.get("hour"), "hour").add(tempTime.get("minute"), "minute");

                columns.push({
                    date: newTime,
                    key: newTime.format("YYYYMMDDHH:mm"),
                });
            });

            items = items.concat(columns);
        } else {
            columns.push({
                date: tempTime,
                key: tempTime.format("YYYYMMDDHHmm"),
            });

            items = items.concat(columns);
        }

        tempTime = tempTime.add(times.intervals.value, times.intervals.unit);
    }

    return items;
};

export const getDay = (
    day = dayjs(),
    times: ITimes,
    rangeType: TRangeType,
) => {
    const dayRange: TRange = {
        headers: [],
        items: [],
    };

    dayRange.headers = [{
        primaryLabel: day.format("DD"),
        secondaryLabel: day.format("ddd"),
        date: day,
    }];

    dayRange.items = generateTimedColumns(dayRange.headers, times, rangeType);

    return dayRange;
};

export const getWeekRange = (
    times: ITimes,
    rangeType: TRangeType,
    startDate: Dayjs,
    endDate: Dayjs,
) => {
    const week: TRange = {
        headers: [],
        items: [],
    };

    let tempDate = startDate;

    while (tempDate.isBefore(endDate) || tempDate.isSame(endDate)) {
        week.headers.push({
            primaryLabel: tempDate.format("DD"),
            secondaryLabel: tempDate.format("ddd"),
            date: tempDate,
        });

        tempDate = tempDate.add(1, "day");
    }

    week.items = generateTimedColumns(week.headers, times, rangeType);

    return week;
};

export const getMonthRange = (
    startDate: Dayjs,
    endDate: Dayjs,
) => {
    const month: TRange = {
        headers: [],
        items: [],
    };

    let visualEndDate = endDate.endOf("month");
    let tempDate = startDate.startOf("month");

    if (tempDate.day() < 1) {
        tempDate = tempDate.add(1, "day");
    } else if (tempDate.day() > 1) {
        tempDate = tempDate.subtract(tempDate.day(), "day").add(1, "day");
    }

    if (visualEndDate.day()) {
        visualEndDate = visualEndDate.endOf("week").add(1, "day");
    }

    while (tempDate.isBefore(visualEndDate) || tempDate.isSame(visualEndDate)) {
        if (!month.headers.find(item => item.primaryLabel === tempDate.format("ddd"))) {
            month.headers.push({ primaryLabel: tempDate.format("ddd"), date: tempDate });
        }

        const column: IColumn = {
            date: tempDate,
            key: tempDate.format("YYYY-MM-DD HH:mm"),
            label: tempDate.format("DD"),
        };

        if (tempDate.isBefore(startDate) || tempDate.isAfter(endDate)) {
            column.className = "ra-calendar-column--blur";
        } else if (tempDate.format("YYYY-MMMM-DD") === dayjs().format("YYYY-MMMM-DD")) {
            column.className = "ra-calendar-column--current";
        }

        month.items.push(column);

        tempDate = tempDate.add(1, "day");
    }

    return month;
};

export const getNewStartAndEndDates = (
    dateRange: TRange,
    rangeType: TRangeType,
    direction: "previous" | "next",
) => {
    let startDate: Dayjs = dateRange.headers[0].date;
    let endDate: Dayjs = dateRange.headers[dateRange.headers.length - 1].date;

    if (rangeType === "day") {
        startDate = startDate[direction === "previous" ? "subtract" : "add"](1, "day");
        endDate = startDate[direction === "previous" ? "subtract" : "add"](1, "day");
    } else if (rangeType === "week") {
        startDate = startDate[direction === "previous" ? "subtract" : "add"](1, "week");
        endDate = endDate[direction === "previous" ? "subtract" : "add"](1, "week");
    } else {
        const occurrences: { [key: string]: number } = {};

        dateRange.items.forEach(item => {
            if (!occurrences[item.date.format("MMMM")]) {
                occurrences[item.date.format("MMMM")] = 1;
            } else {
                occurrences[item.date.format("MMMM")]++;
            }
        });

        let currentMonth: string = "";

        Object.keys(occurrences).forEach(key => {
            if (currentMonth === "" || occurrences[key] > occurrences[currentMonth]) {
                currentMonth = key;
            }
        });

        const itemInMonth = dateRange.items.find(item => item.date.format("MMMM") === currentMonth);

        startDate = (itemInMonth as IColumn).date[direction === "previous" ? "subtract" : "add"](1, "month").startOf("month");
        endDate = (itemInMonth as IColumn).date[direction === "previous" ? "subtract" : "add"](1, "month").endOf("month");
    }

    return { startDate, endDate };
};

export const getRange = (
    rangeType: TRangeType,
    times: ITimes,
    startDate = dayjs().startOf(rangeType),
    endDate = dayjs().endOf(rangeType),
) => {
    if (rangeType === "day") return getDay(startDate, times, rangeType);
    if (rangeType === "week") return getWeekRange(times, rangeType, startDate, endDate);

    return getMonthRange(startDate, endDate);
};