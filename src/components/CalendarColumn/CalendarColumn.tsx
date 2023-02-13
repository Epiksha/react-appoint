import classNames from "classnames";
import { Dayjs } from "dayjs";

import { IColumn } from "../../models/date";

const CalendarColumn: React.FC<IColumn> = ({
    className,
    date,
    label,
}) => {
    const handleColumnClick = (date: Dayjs) => {
        console.log(date.format("DD MMMM YYYY"));
    };

    return (
        <button
            key={date.format("YYYY-MM-DDTHH:mm:ssZ")}
            className={classNames("ra-calendar-column", className)}
            onClick={() => handleColumnClick(date)}
        >
            {label}
        </button>
    );
};

export default CalendarColumn;