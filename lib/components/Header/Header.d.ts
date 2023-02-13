/// <reference types="react" />
import { TRange, TRangeType } from "../../models/date";
interface IHeaderProps {
    dateRange: TRange;
    handleRangeChange(type: TRangeType): void;
    rangeType: TRangeType;
}
declare const Header: React.FC<IHeaderProps>;
export default Header;
