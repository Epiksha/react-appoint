/// <reference types="react" />
import { TRangeType } from "../../models/date";
interface IHeaderProps {
    handleRangeChange(type: TRangeType): void;
    rangeType: TRangeType;
}
declare const Header: React.FC<IHeaderProps>;
export default Header;
