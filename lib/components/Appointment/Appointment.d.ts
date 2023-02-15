/// <reference types="react" />
import { IAppointment } from "../../models/appointment";
interface IAppointmentProps extends IAppointment {
}
declare const Appointment: React.FC<IAppointmentProps>;
export default Appointment;
