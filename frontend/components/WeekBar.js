import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function WeekBar(props) {
    const [target, setTarget] = useState(0)
    return (
        <Tabs value={target}
            centered={true}
            variant="scrollable"
            scrollButtons="auto"
            onChange={(event, newValue) => setTarget(newValue)}
        >
            <Tab label="23" hint="пн"></Tab>
            <Tab label="24" hint="вт" variant="current"></Tab>
            <Tab label="25" hint="ср">1</Tab>
            <Tab label="26" hint="чт">1</Tab>
            <Tab label="27" hint="пт">1</Tab>
            <Tab label="28" hint="сб">1</Tab>
        </Tabs>
    )
}