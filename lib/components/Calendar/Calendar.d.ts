import React from "react";
import { Dayjs } from "dayjs";
import { IAppointment } from "../../models/appointment";
import { ITimes } from "../../models/times";
import { TRange, TRangeType } from "../../models/date";
interface ICalendarProps {
    appointments: IAppointment[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}
declare const Calendar: React.FC<ICalendarProps>;
export default Calendar;
