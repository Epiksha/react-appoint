import React, { Dispatch, SetStateAction } from "react";
import { Dayjs } from "dayjs";
import { IAppointment } from "../models/appointment";
import { ITimes } from "../models/times";
import { TRangeType } from "../models/date";
import "../scss/entry.scss";
interface IReactAppointProps {
    appointments: IAppointment[];
    defaultViewType?: TRangeType;
    isModalOpen: boolean;
    modalContent: React.ReactNode;
    onDateClick(date: Dayjs): void;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    times?: ITimes;
}
declare const ReactAppoint: React.FC<IReactAppointProps>;
export default ReactAppoint;
