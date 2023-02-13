import dayjs from "dayjs";

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
            className: "ra-calendar-column--time",
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
    startDate = dayjs().startOf("week"),
    endDate = dayjs().endOf("week"),
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
    startDate = dayjs().startOf("month"),
    endDate = dayjs().endOf("month"),
) => {
    const month: TRange = {
        headers: [],
        items: [],
    };

    startDate = startDate.startOf("month");
    endDate = endDate.endOf("month");

    let tempStartDate = startDate.startOf("month");
    let tempEndDate = endDate.endOf("month");
    let tempDate = startDate.startOf("month");

    if (tempDate.day() < 1) {
        tempDate = tempDate.add(1, "day");
    } else if (tempDate.day() > 1) {
        tempDate = tempDate.subtract(tempDate.day(), "day").add(1, "day");
    }

    if (tempEndDate.day() < 1) {
        tempEndDate = tempEndDate.add(1, "day");
    } else if (tempEndDate.day()) {
        tempEndDate = tempEndDate.endOf("week").add(1, "day");
    }

    while (tempDate.isBefore(tempEndDate) || tempDate.isSame(tempEndDate)) {
        const formattedDay = tempDate.format("ddd");

        if (!month.headers.find(item => item.primaryLabel === formattedDay)) {
            month.headers.push({ primaryLabel: formattedDay, date: tempDate });
        }

        const column: IColumn = {
            date: tempDate,
            key: tempDate.format("YYYY-MM-DD HH:mm"),
            label: tempDate.format("DD"),
        };

        if (tempDate.isBefore(tempStartDate) || tempDate.isAfter(endDate)) {
            column.className = "ra-calendar-column--blur";
        } else if (tempDate.isSame(dayjs())) {
            column.className = "ra-calendar-column--blur";
        }

        month.items.push(column);

        tempDate = tempDate.add(1, "day");
    }

    return month;
};

export const getRange = (
    rangeType: TRangeType,
    times: ITimes,
    startDate = dayjs().startOf("week"),
    endDate = dayjs().endOf("week"),
) => {
    if (rangeType === "day") return getDay(dayjs(), times, rangeType);
    if (rangeType === "week") return getWeekRange(times, rangeType, startDate, endDate);

    return getMonthRange(startDate, endDate);
};