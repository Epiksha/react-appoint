import { Dayjs } from "dayjs";

import { TRange, TRangeType } from "../../models/date";
import { ITimes } from "../../models/times";
import CalendarColumn from "../CalendarColumn/CalendarColumn";

interface ICalendarBodyProps {
    appointments: string[];
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
                    handleColumClick={handleColumnClick}
                    {...column}
                />
            ))}
        </div>
    );
};

export default CalendarBody;