import classNames from "classnames";

import { TRangeType } from "../../models/date";

interface IHeaderProps {
    handleRangeChange(type: TRangeType): void;
    rangeType: TRangeType;
}

const optionLabels = ["Day", "Week", "Month"];

const Header: React.FC<IHeaderProps> = ({
    handleRangeChange,
    rangeType,
}) => {
    return (
        <header className="ra-header">
            <div className="ra-header__range">
                <p>&lt; 11 - 17 FEBRUARY 2023 &gt;</p>
            </div>

            <div className="ra-header__options">
                {optionLabels.map(label => (
                    <button
                        key={label}
                        className={classNames("ra-header__option", { "ra-header__option--active": label.toLowerCase() === rangeType})}
                        onClick={() => handleRangeChange(label.toLowerCase() as TRangeType)}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </header>
    );
};

export default Header;