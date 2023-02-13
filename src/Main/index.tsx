import React, { useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import minMax from "dayjs/plugin/minMax";

import Calendar from "../components/Calendar/Calendar";
import { getNewStartAndEndDates, getRange } from "../helpers/date.helper";
import Header from "../components/Header/Header";
import { IReactAppointProps } from "../models/main";
import Modal from "../components/Modal/Modal";
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
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalDate, setModalDate] = useState(dayjs());

    useEffect(() => {
        setDateRange(getRange(rangeType, times));
    }, [rangeType]);

    const handleDateRangeChange = (direction: "previous" | "next") => {
        const { startDate, endDate } = getNewStartAndEndDates(dateRange, rangeType, direction);

        setDateRange(getRange(rangeType, times, startDate, endDate));
    };

    const handleColumnClick = (date: Dayjs) => {
        setModalDate(date);
        setIsModalOpen(true);
    };

    return (
        <div className="ra-container">
            <Header
                dateRange={dateRange}
                rangeType={rangeType}
                handleDateRangeChange={handleDateRangeChange}
                handleRangeTypeChange={setRangeType}
            />

            <Calendar
                appointments={appointments}
                rangeType={rangeType}
                dateRange={dateRange}
                times={times}
                handleColumnClick={handleColumnClick}
            />

            {isModalOpen ? (
                <Modal setIsModalOpen={setIsModalOpen} currentDate={modalDate} />
            ) : null}
        </div>
    );
};

export default ReactAppoint;