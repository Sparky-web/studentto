import { Tabs } from "@mui/material";
import { useState } from "react";
import WeekTab from "./WeekTab"

export default function WeekBar( props ){
    const [target, setTarget] = useState(0)
    return (
        <Tabs value={target}>
            <WeekTab target={target} setTarget={setTarget} id={0} day={"Пн"} number={15}/>
            <WeekTab target={target} setTarget={setTarget} id={1} day={"Вт"} number={16}/>
            <WeekTab target={target} setTarget={setTarget} id={2} day={"Ср"} number={17}/>
            <WeekTab target={target} setTarget={setTarget} id={3} day={"Чт"} number={18}/>
            <WeekTab target={target} setTarget={setTarget} id={4} day={"Пт"} number={19}/>
            <WeekTab target={target} setTarget={setTarget} id={5} day={"Сб"} number={20}/>
            <WeekTab target={target} setTarget={setTarget} id={6} day={"Вс"} number={21}/>
        </Tabs>
    )
}