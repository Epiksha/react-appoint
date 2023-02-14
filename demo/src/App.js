import dayjs from "dayjs";
import { useMemo, useState } from "react";
import { ReactAppoint } from "react-appoint";

const defaultAppointments = [
    {
        title: "Company Meeting",
        startDate: dayjs().startOf("day").add(9),
        endDate: dayjs().endOf("day").add(17),
    },
    {
        title: "Client Briefing",
        startDate: dayjs().add(1, "day").add(9),
        endDate: dayjs().add(7, "day").add(17),
    },
    {
        title: "Internal Test",
        startDate: dayjs().add(2, "day").startOf("day").add(9),
        endDate: dayjs().add(2, "day").endOf("day").add(17),
    },
];

const App = () => {
    const [appointments, setAppointments] = useState(defaultAppointments);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [currentModalTitle, setCurrentModalTitle] = useState("");
    const [currentModalStartDate, setCurrentModalStartDate] = useState(dayjs());
    const [currentModalEndDate, setCurrentModalEndDate] = useState(dayjs());

    const handleModalSubmit = (event) => {
        event.preventDefault();

        setAppointments([
            ...appointments,
            {
                title: currentModalTitle,
                startDate: currentModalStartDate,
                endDate: currentModalEndDate,
            },
        ]);

        setIsModalOpen(false);
    };

    const handleFieldChange = (event, field) => {
        if (field === "title") {
            setCurrentModalTitle(event.target.value);
        } else if (field === "startDate") {
            setCurrentModalStartDate(dayjs(event.target.value));
        } else if (field === "endDate") {
            setCurrentModalEndDate(dayjs(event.target.value));
        }
    };

    const handleDateClick = (date) => {
        setCurrentModalTitle("New Appointment");
        setCurrentModalStartDate(date);
        setCurrentModalEndDate(date);
        setIsModalOpen(true);
    };

    const modalContent = useMemo(() => (
        <>
            <form onSubmit={handleModalSubmit}>
                <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label>Title</label>
                        <input type="text" value={currentModalTitle} onChange={(event) => handleFieldChange(event, "title")}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label>Start Date</label>
                        <input type="date" value={currentModalStartDate} onChange={(event) => handleFieldChange(event, "startDate")}></input>
                    </div>

                    <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                        <label>End Date</label>
                        <input type="date" value={currentModalEndDate} onChange={(event) => handleFieldChange(event, "endDate")}></input>
                    </div>

                    <button type="submit">Add Appointment</button>
                </div>
            </form>
        </>

    // eslint-disable-next-line
    ), [currentModalEndDate, currentModalStartDate, currentModalTitle]);

    return (
        <div className="App">
            <ReactAppoint
                appointments={appointments}
                isModalOpen={isModalOpen}
                modalContent={modalContent}
                onDateClick={handleDateClick}
                setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
};

export default App;