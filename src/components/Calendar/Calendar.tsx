import React from "react";
import classNames from "classnames";
import { Dayjs } from "dayjs";

import CalendarBody from "../CalendarBody/CalendarBody";
import CalendarHeader from "../CalendarHeader/CalendarHeader";
import { ITimes } from "../../models/times";
import { TRange, TRangeType } from "../../models/date";

interface ICalendarProps {
    appointments: string[];
    dateRange: TRange;
    rangeType: TRangeType;
    handleColumnClick(date: Dayjs): void;
    times: ITimes;
}

const Calendar: React.FC<ICalendarProps> = ({
    appointments,
    dateRange,
    rangeType,
    handleColumnClick,
    times,
}) => {
    return (
        <div className={classNames("ra-calendar", `ra-calendar--${rangeType}`)}>
            <CalendarHeader
                dateRange={dateRange}
                rangeType={rangeType}
            />

            <CalendarBody
                appointments={appointments}
                dateRange={dateRange}
                rangeType={rangeType}
                times={times}
                handleColumnClick={handleColumnClick}
            />
        </div>
    );
};

export default Calendar;