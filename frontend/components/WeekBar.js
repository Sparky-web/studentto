import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

export default function WeekBar(props) {
    const [target, setTarget] = useState(0)
    return (
        <Tabs value={target}
            variant="scrollable"
            scrollButtons="auto"
            onChange={(event, newValue) => setTarget(newValue)}
        >
            <Tab label="23" hint="пн" />
            <Tab label="24" hint="вт" variant="current" />
            <Tab label="25" hint="ср" />
            <Tab label="26" hint="чт" />
            <Tab label="27" hint="пт" />
            <Tab label="28" hint="сб" />
        </Tabs>
    )
}