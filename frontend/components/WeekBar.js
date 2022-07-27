import { Tabs } from "@mui/material";
import { useState } from "react";
import WeekTab from "./WeekTab"

export default function WeekBar( props ){
    const [target, setTarget] = useState("0")
    return (
        <Tabs
            onChange={(event, newValue) => setTarget(newValue)}
            value={target}
        >
            <WeekTab target={target} id={0} day={"Пн"} number={15}/>
        </Tabs>
    )
}