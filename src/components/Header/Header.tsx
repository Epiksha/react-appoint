import classNames from "classnames";
import { useEffect, useState } from "react";

import { generateLabel } from "../../helpers/label.helper";
import { TRange, TRangeType } from "../../models/date";

interface IHeaderProps {
    dateRange: TRange;
    handleDateRangeChange(direction: "previous" | "next"): void;
    handleRangeTypeChange(type: TRangeType): void;
    rangeType: TRangeType;
}

const optionLabels = ["Day", "Week", "Month"];

const Header: React.FC<IHeaderProps> = ({
    dateRange,
    handleDateRangeChange,
    handleRangeTypeChange,
    rangeType,
}) => {
    const [currentLabel, setCurrentLabel] = useState(generateLabel(rangeType, dateRange));

    useEffect(() => {
        setCurrentLabel(generateLabel(rangeType, dateRange));
    }, [dateRange, rangeType]);

    return (
        <header className="ra-header">
            <div className="ra-header__range">
                <button
                    className="ra-header__range-trigger ra-header__range-trigger--previous"
                    onClick={() => handleDateRangeChange("previous")}
                >
                    &lt;
                </button>

                <p className="ra-header__range-label">{currentLabel}</p>

                <button
                    className="ra-header__range-trigger ra-header__range-trigger--next"
                    onClick={() => handleDateRangeChange("next")}
                >
                    &gt;
                </button>
            </div>

            <div className="ra-header__options">
                <div className="ra-header__options-container">
                    {optionLabels.map(label => (
                        <button
                            key={label}
                            className={classNames("ra-header__option", { "ra-header__option--active": label.toLowerCase() === rangeType})}
                            onClick={() => handleRangeTypeChange(label.toLowerCase() as TRangeType)}
                        >
                            {label}
                        </button>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;