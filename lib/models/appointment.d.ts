import { Dayjs } from "dayjs";
export interface IAppointment {
    title: string;
    startDate: Date | string | Dayjs;
    endDate: Date | string | Dayjs;
}
