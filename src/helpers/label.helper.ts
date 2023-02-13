import dayjs from "dayjs";

import { TRange, TRangeType } from "../models/date";

export const generateLabel = (
    rangeType: TRangeType,
    dateRange: TRange,
) => {
    if (rangeType === "day") {
        return dateRange.headers[0].date.format("DD, MMMM YYYY");
    }
    
    if (rangeType === "week") {
        const earliestDay = dayjs.min(dateRange.headers.map(({ date }) => date));
        const latestDay = dayjs.max(dateRange.headers.map(({ date }) => date));

        return `${earliestDay.format("DD")} - ${latestDay.format("DD MMMM YYYY")}`;
    }

    return dateRange.headers[dateRange.headers.length - 1].date.format("MMMM YYYY");
};