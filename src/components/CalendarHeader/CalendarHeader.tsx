import React from "react";
import classNames from "classnames";
import dayjs from "dayjs";

import { ICalendarHeader, TRange, TRangeType } from "../../models/date";

interface ICalendarHeaderProps {
    dateRange: TRange;
    rangeType: TRangeType;
}

const CalendarHeader: React.FC<ICalendarHeaderProps> = ({
    dateRange,
    rangeType,
}) => {
    return (
        <header className="ra-calendar-header">
            {rangeType !== "month" ? (
                <div className="ra-calendar-header__item ra-calendar-header__item--blank"></div>
            ) : null}

            {dateRange.headers.map((item: ICalendarHeader) => (
                <div
                    key={item.primaryLabel + item.secondaryLabel}
                    className={classNames(
                        "ra-calendar-header__item",
                        { "ra-calendar-header__item--current": dayjs().format("DD MM YY") === item.date.format("DD MM YY")}
                    )}
                >
                    <p className="ra-calendar-header__primary-label">{item.primaryLabel}</p>

                    {item.secondaryLabel ? (
                        <p className="ra-calendar-header__secondary-label">{item.secondaryLabel}</p>
                    ) : null}
                </div>
            ))}
        </header>
    );
};

export default CalendarHeader;