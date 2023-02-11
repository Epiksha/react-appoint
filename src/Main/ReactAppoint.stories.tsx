import React from "react";
import { ComponentMeta } from "@storybook/react";
import ReactAppoint from ".";

export default {
  title: "Components/ReactAppoint",
  component: ReactAppoint,
} as ComponentMeta<typeof ReactAppoint>;

export const Main = () => <ReactAppoint />