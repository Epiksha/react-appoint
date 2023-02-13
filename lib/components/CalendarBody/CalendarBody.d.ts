import React from "react";
import { TRange, TRangeType } from "../../models/date";
import { ITimes } from "../../models/times";
interface ICalendarBodyProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    times: ITimes;
}
declare const CalendarBody: React.FC<ICalendarBodyProps>;
export default CalendarBody;
