/// <reference types="react" />
import { Dayjs } from "dayjs";
import { TRange, TRangeType } from "../../models/date";
import { ITimes } from "../../models/times";
interface ICalendarBodyProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}
declare const CalendarBody: React.FC<ICalendarBodyProps>;
export default CalendarBody;
