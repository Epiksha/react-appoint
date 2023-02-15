/// <reference types="react" />
import { Dayjs } from "dayjs";
import { IAppointment } from "../../models/appointment";
import { IColumn, TRangeType } from "../../models/date";
interface ICalendarColumnProps extends IColumn {
    appointments: IAppointment[];
    handleColumnClick(date: Dayjs): void;
    rangeType: TRangeType;
}
declare const CalendarColumn: React.FC<ICalendarColumnProps>;
export default CalendarColumn;
