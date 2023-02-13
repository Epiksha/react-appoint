import React, { useEffect, useState } from "react";
import dayjs from "dayjs";
import minMax from "dayjs/plugin/minMax";

import Calendar from "../components/Calendar/Calendar";
import { getRange } from "../helpers/date.helper";
import Header from "../components/Header/Header";
import { IReactAppointProps } from "../models/main";
import { TRange, TRangeType } from "../models/date";
import "../scss/entry.scss";

dayjs.extend(minMax);

const ReactAppoint: React.FC<IReactAppointProps> = ({
    appointments,
    defaultViewType = "month",
    times = {
        start: 9,
        end: 17,
        intervals: {
            unit: "h",
            value: 1,
        },
    },
}) => {
    const [rangeType, setRangeType] = useState<TRangeType>(defaultViewType);
    const [dateRange, setDateRange] = useState<TRange>(getRange(rangeType, times));

    useEffect(() => {
        setDateRange(getRange(rangeType, times));
    }, [rangeType]);

    return (
        <div className="ra-container">
            <Header
                dateRange={dateRange}
                rangeType={rangeType}
                handleRangeChange={setRangeType}
            />

            <Calendar
                appointments={appointments}
                rangeType={rangeType}
                dateRange={dateRange}
                times={times}
            />
        </div>
    );
};

export default ReactAppoint;