import { Dayjs } from "dayjs";

import CalendarColumn from "../CalendarColumn/CalendarColumn";
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

const CalendarBody: React.FC<ICalendarBodyProps> = ({
    appointments,
    dateRange,
    handleColumnClick,
}) => {
    return (
        <div className="ra-calendar-body">
            {dateRange.items.map((column: any) => (
                <CalendarColumn
                    appointments={appointments}
                    key={column.key}
                    {...column}
                    handleColumnClick={handleColumnClick}
                />
            ))}
        </div>
    );
};

export default CalendarBody;