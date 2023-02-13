// import dayjs from "dayjs";
import { ReactAppoint } from "react-appoint";

const App = () => {
    /* const appointments = [
        dayjs().add(9, "h").format(),
        dayjs().add(12, "h").format(),
        dayjs().add(14, "h").format(),
        dayjs().add(16, "h").format(),
    ]; */

    return (
        <div className="App">
            <ReactAppoint times={{
                start: 9,
                end: 17,
                intervals: {
                    unit: "h",
                    value: 1,
                }
            }} />
        </div>
    );
};

export default App;