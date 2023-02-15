/// <reference types="react" />
import { Dayjs } from "dayjs";
import { IAppointment } from "../../models/appointment";
import { ITimes } from "../../models/times";
import { TRange, TRangeType } from "../../models/date";
interface ICalendarBodyProps {
    appointments: IAppointment[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}
declare const CalendarBody: React.FC<ICalendarBodyProps>;
export default CalendarBody;
