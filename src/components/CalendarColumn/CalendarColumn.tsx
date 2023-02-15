import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";

import Appointment from "../Appointment/Appointment";
import { IAppointment } from "../../models/appointment";
import { IColumn } from "../../models/date";

interface ICalendarColumnProps extends IColumn {
    appointments: IAppointment[];
    handleColumnClick(date: Dayjs): void;
}

const CalendarColumn: React.FC<ICalendarColumnProps> = ({
    appointments,
    className,
    date,
    handleColumnClick,
    label,
}) => {
    const handleDateClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        handleColumnClick(date);
    };

    const dayAppointments = useMemo(() => (
        appointments.filter(appointment => (
            dayjs(appointment.startDate).startOf("day").format("YY-MM-DDTHH:MM") === dayjs(date).startOf("day").format("YY-MM-DDTHH:MM")
        )
    )), [appointments, date]);

    return (
        <div
            key={date.format("YYYY-MM-DDTHH:mm:ssZ")}
            className="ra-calendar-column"
        >
            <button
                className={classNames("ra-calendar-column__trigger", className)}
                onClick={handleDateClick}
            >
                <span className="ra-calendar-column__trigger-label">{label}</span>
            </button>

            {dayAppointments.map(appointment => (
                <Appointment
                    key={appointment.title}
                    {...appointment}
                />
            ))}
        </div>
    );
};

export default CalendarColumn;