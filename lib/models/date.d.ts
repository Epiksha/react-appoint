import { Dayjs } from "dayjs";
export interface ICalendarHeader {
    primaryLabel: string;
    secondaryLabel?: string;
    date: Dayjs;
}
export type TRange = {
    headers: ICalendarHeader[];
    items: IColumn[];
};
export interface IColumn {
    className?: string;
    date: Dayjs;
    isTimeColumn?: boolean;
    label?: string;
    key: string;
}
export type TRangeType = "day" | "week" | "month";
