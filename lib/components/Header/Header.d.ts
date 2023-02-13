/// <reference types="react" />
import { TRange, TRangeType } from "../../models/date";
interface IHeaderProps {
    dateRange: TRange;
    handleDateRangeChange(direction: "previous" | "next"): void;
    handleRangeTypeChange(type: TRangeType): void;
    rangeType: TRangeType;
}
declare const Header: React.FC<IHeaderProps>;
export default Header;
