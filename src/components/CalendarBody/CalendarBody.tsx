import React from "react";

import { TRange, TRangeType } from "../../models/date";
import { ITimes } from "../../models/times";
import CalendarColumn from "../CalendarColumn/CalendarColumn";

interface ICalendarBodyProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    times: ITimes;
}

const CalendarBody: React.FC<ICalendarBodyProps> = ({
    appointments,
    dateRange,
}) => {
    return (
        <div className="ra-calendar-body">
            {dateRange.items.map((column: any) => (
                <CalendarColumn
                    key={column.key}
                    {...column}
                />
            ))}
        </div>
    );
};

export default CalendarBody;