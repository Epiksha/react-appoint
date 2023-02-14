/// <reference types="react" />
import { Dayjs } from "dayjs";
import { IColumn } from "../../models/date";
interface ICalendarColumnProps extends IColumn {
    handleColumnClick(date: Dayjs): void;
}
declare const CalendarColumn: React.FC<ICalendarColumnProps>;
export default CalendarColumn;
