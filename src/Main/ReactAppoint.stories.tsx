import React from "react";
import { ComponentMeta } from "@storybook/react";
import dayjs from "dayjs";

import ReactAppoint from ".";

export default {
  title: "Components/ReactAppoint",
  component: ReactAppoint,
} as ComponentMeta<typeof ReactAppoint>;

const appointments = [
    dayjs().add(9, "h").format(),
    dayjs().add(12, "h").format(),
    dayjs().add(14, "h").format(),
    dayjs().add(16, "h").format(),
];

export const Main = () => <ReactAppoint appointments={appointments} />