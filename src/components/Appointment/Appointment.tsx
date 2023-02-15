import dayjs, { Dayjs } from "dayjs";
import { IAppointment } from "../../models/appointment";

interface IAppointmentProps extends IAppointment {
}

const Appointment: React.FC<IAppointmentProps> = ({
    endDate,
    startDate,
    title,
}) => {
    const days = dayjs(endDate).diff(dayjs(startDate), "days");

    const handleAppointmentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();

        console.log({
            endDate,
            startDate,
            title,
        });
    };

    return (
        <button
            className="ra-appointment"
            style={{ width: `${100 * days}%` }}
            onClick={handleAppointmentClick}
        >
            <p className="ra-appointment__title">
                {title}
            </p>
        </button>
    );
};

export default Appointment;