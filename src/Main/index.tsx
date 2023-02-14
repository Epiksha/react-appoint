import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import minMax from "dayjs/plugin/minMax";

import Calendar from "../components/Calendar/Calendar";
import { getNewStartAndEndDates, getRange } from "../helpers/date.helper";
import Header from "../components/Header/Header";
import { IAppointment } from "../models/appointment";
import { ITimes } from "../models/times";
import Modal from "../components/Modal/Modal";
import { TRange, TRangeType } from "../models/date";
import "../scss/entry.scss";

dayjs.extend(minMax);

interface IReactAppointProps {
    appointments: IAppointment[];
    defaultViewType?: TRangeType;
    isModalOpen: boolean;
    modalContent: React.ReactNode;
    onDateClick(date: Dayjs): void;
    setIsModalOpen: Dispatch<SetStateAction<boolean>>;
    times?: ITimes;
}

const ReactAppoint: React.FC<IReactAppointProps> = ({
    appointments,
    defaultViewType = "month",
    isModalOpen,
    setIsModalOpen,
    modalContent,
    onDateClick,
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

    const handleDateRangeChange = (direction: "previous" | "next") => {
        const { startDate, endDate } = getNewStartAndEndDates(dateRange, rangeType, direction);

        setDateRange(getRange(rangeType, times, startDate, endDate));
    };

    const handleDateClick = (date: Dayjs) => {
        onDateClick(date);
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
                handleColumnClick={handleDateClick}
            />

            {isModalOpen ? (
                <Modal setIsModalOpen={setIsModalOpen}>
                    {modalContent}
                </Modal>
            ) : null}
        </div>
    );
};

export default ReactAppoint;