import dayjs, { Dayjs } from "dayjs";
import { ICalendarHeader, IColumn, TRange, TRangeType } from "../models/date";
import { ITimes } from "../models/times";
export declare const generateTimedColumns: (headers: ICalendarHeader[], times: ITimes, rangeType: TRangeType) => IColumn[];
export declare const getDay: (day: dayjs.Dayjs | undefined, times: ITimes, rangeType: TRangeType) => TRange;
export declare const getWeekRange: (times: ITimes, rangeType: TRangeType, startDate: Dayjs, endDate: Dayjs) => TRange;
export declare const getMonthRange: (startDate: Dayjs, endDate: Dayjs) => TRange;
export declare const getNewStartAndEndDates: (dateRange: TRange, rangeType: TRangeType, direction: "previous" | "next") => {
    startDate: dayjs.Dayjs;
    endDate: dayjs.Dayjs;
};
export declare const getRange: (rangeType: TRangeType, times: ITimes, startDate?: dayjs.Dayjs, endDate?: dayjs.Dayjs) => TRange;
