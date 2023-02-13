import dayjs from "dayjs";
import { ICalendarHeader, IColumn, TRange, TRangeType } from "../models/date";
import { ITimes } from "../models/times";
export declare const generateTimedColumns: (headers: ICalendarHeader[], times: ITimes, rangeType: TRangeType) => IColumn[];
export declare const getDay: (day: dayjs.Dayjs | undefined, times: ITimes, rangeType: TRangeType) => TRange;
export declare const getWeekRange: (times: ITimes, rangeType: TRangeType, startDate?: dayjs.Dayjs, endDate?: dayjs.Dayjs) => TRange;
export declare const getMonthRange: (startDate?: dayjs.Dayjs, endDate?: dayjs.Dayjs) => TRange;
export declare const getRange: (rangeType: TRangeType, times: ITimes, startDate?: dayjs.Dayjs, endDate?: dayjs.Dayjs) => TRange;
