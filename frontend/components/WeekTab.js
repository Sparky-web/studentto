import {Tab, Typography} from "@mui/material";

export default function WeekTab( props ){
    const { id, target, day, number, setTarget } = props
    return (
        <Tab
            value={id}
            onClick={(event) => setTarget(id)}
            icon={ <Typography color={target === id ? "primary.highlight" : "primary.neutral"} variant="captionM">{day}</Typography> }
            label={ <Typography color={target === id ? "primary.lightest" : "text.disabled"} variant="bodyL">{number}</Typography>}
            sx={ {minWidth: 0, borderRadius: "10px", backgroundColor: target === id ? "primary.main" : "primary.none" } }
        />
    )
}