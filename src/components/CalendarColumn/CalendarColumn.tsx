import classNames from "classnames";
import dayjs, { Dayjs } from "dayjs";
import { useMemo } from "react";

import Appointment from "../Appointment/Appointment";
import { IAppointment } from "../../models/appointment";
import { IColumn, TRangeType } from "../../models/date";

interface ICalendarColumnProps extends IColumn {
    appointments: IAppointment[];
    handleColumnClick(date: Dayjs): void;
    rangeType: TRangeType;
}

const CalendarColumn: React.FC<ICalendarColumnProps> = ({
    appointments,
    className,
    date,
    handleColumnClick,
    isTimeColumn,
    label,
    rangeType,
}) => {
    const handleDateClick = (event: React.MouseEvent) => {
        event.stopPropagation();
        event.preventDefault();

        handleColumnClick(date);
    };

    const dayAppointments = useMemo(() => {
        return appointments.filter(appointment => (
            !isTimeColumn && (
                (dayjs(appointment.startDate).isBefore(dayjs(date)) && (dayjs(appointment.endDate).isSame(dayjs(date)) || dayjs(appointment.endDate).isAfter(dayjs(date)))) ||
                dayjs(appointment.startDate).startOf("day").format("YY-MM-DDTHH:MM") === dayjs(date).startOf("day").format("YY-MM-DDTHH:MM")
            )
        ));
    }, [appointments, date]);

    return (
        <div
            key={date.format("YYYY-MM-DDTHH:mm:ssZ")}
            className={classNames("ra-calendar-column", { "ra-calendar-column--time": isTimeColumn }, className)}
        >
            {isTimeColumn ? (
                <div className="ra-calendar-column__trigger">
                    {label ? (
                        <span className="ra-calendar-column__trigger-label">{label}</span>
                    ) : null}
                </div>
            ) : (
                <button
                    className="ra-calendar-column__trigger"
                    onClick={handleDateClick}
                >
                    {label ? (
                        <span className="ra-calendar-column__trigger-label">{label}</span>
                    ) : null}
                </button>
            )}

            {dayAppointments.length ? (
                <div className="ra-appointments">
                    {dayAppointments.map(appointment => (
                        <Appointment
                            key={appointment.title}
                            {...appointment}
                            rangeType={rangeType}
                        />
                    ))}
                </div>
            ) : null}
        </div>
    );
};

export default CalendarColumn;