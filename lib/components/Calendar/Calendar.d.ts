import React from "react";
import { Dayjs } from "dayjs";
import { ITimes } from "../../models/times";
import { TRange, TRangeType } from "../../models/date";
interface ICalendarProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}
declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
