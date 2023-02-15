/// <reference types="react" />
import { IAppointment } from "../../models/appointment";
import { TRangeType } from "../../models/date";
interface IAppointmentProps extends IAppointment {
    rangeType: TRangeType;
}
declare const Appointment: React.FC<IAppointmentProps>;
export default Appointment;
