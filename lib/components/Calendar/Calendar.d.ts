import React from "react";
import { ITimes } from "../../models/times";
import { TRange, TRangeType } from "../../models/date";
interface ICalendarProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    times: ITimes;
}
declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
