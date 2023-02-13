import classNames from "classnames";
import { Dayjs } from "dayjs";

import { IColumn } from "../../models/date";

interface ICalendarColumnProps extends IColumn {
    handleColumnClick(date: Dayjs): void;
}

const CalendarColumn: React.FC<ICalendarColumnProps> = ({
    className,
    date,
    handleColumnClick,
    label,
}) => {
    return (
        <button
            key={date.format("YYYY-MM-DDTHH:mm:ssZ")}
            className={classNames("ra-calendar-column", className)}
            onClick={() => handleColumnClick(date)}
        >
            <span className="ra-calendar-column__label">{label}</span>
        </button>
    );
};

export default CalendarColumn;