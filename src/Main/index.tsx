import React, { useMemo, useState } from "react";

import Calendar from "../components/Calendar/Calendar";
import { getRange } from "../helpers/date.helper";
import Header from "../components/Header/Header";
import { IReactAppointProps } from "../models/main";
import { TRangeType } from "../models/date";
import "../scss/entry.scss";

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

    const dateRange = useMemo(() => {
        return getRange(rangeType, times);
    }, [rangeType]);

    return (
        <div className="ra-container">
            <Header rangeType={rangeType} handleRangeChange={setRangeType} />

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