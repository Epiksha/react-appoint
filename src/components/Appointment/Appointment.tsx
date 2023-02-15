import { IAppointment } from "../../models/appointment";
import { TRangeType } from "../../models/date";

interface IAppointmentProps extends IAppointment {
    rangeType: TRangeType;
}

const Appointment: React.FC<IAppointmentProps> = (props) => {
    const { endDate, startDate, title } = props;

    const handleAppointmentClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.stopPropagation();
        event.preventDefault();

        console.log(props);
    };

    return (
        <button
            className="ra-appointment"
            onClick={handleAppointmentClick}
        >
            <p className="ra-appointment__title">
                {title}
            </p>
        </button>
    );
};

export default Appointment;