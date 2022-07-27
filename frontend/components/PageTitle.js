import {Typography} from "@mui/material";

export default function PageTitle( props ){
    return (
        <Typography variant="h4" textAlign={"center"} m={3}>
            {props.text}
        </Typography>
    )
}