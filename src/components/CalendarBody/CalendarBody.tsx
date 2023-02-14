import { Dayjs } from "dayjs";
import { IAppointment } from "../../models/appointment";

import { TRange, TRangeType } from "../../models/date";
import { ITimes } from "../../models/times";
import CalendarColumn from "../CalendarColumn/CalendarColumn";

interface ICalendarBodyProps {
    appointments: IAppointment[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}

const CalendarBody: React.FC<ICalendarBodyProps> = ({
    appointments,
    dateRange,
    handleColumnClick,
}) => {
    return (
        <div className="ra-calendar-body">
            {dateRange.items.map((column: any) => (
                <CalendarColumn
                    key={column.key}
                    {...column}
                    handleColumnClick={handleColumnClick}
                />
            ))}
        </div>
    );
};

export default CalendarBody;