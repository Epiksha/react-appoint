import { ManipulateType } from "dayjs";

export interface ITimes {
    end: number;
    start: number;
    intervals: {
        value: number;
        unit: ManipulateType;
    };
}