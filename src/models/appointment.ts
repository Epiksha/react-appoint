import { Dayjs } from "dayjs";

export interface IAppointment {
    title: Date | string | Dayjs;
    startDate: Date | string | Dayjs;
    endDate: Date | string | Dayjs;
};