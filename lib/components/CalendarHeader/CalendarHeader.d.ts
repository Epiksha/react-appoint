import React from "react";
import { TRange, TRangeType } from "../../models/date";
interface ICalendarHeaderProps {
    dateRange: TRange;
    rangeType: TRangeType;
}
declare const CalendarHeader: React.FC<ICalendarHeaderProps>;
export default CalendarHeader;
