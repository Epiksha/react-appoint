import { TRangeType } from "./date";
import { ITimes } from "./times";
export interface IReactAppointProps {
    appointments: string[];
    defaultViewType?: TRangeType;
    times?: ITimes;
}
