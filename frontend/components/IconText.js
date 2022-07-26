import { Typography, Stack } from "@mui/material";
import {useTheme} from "@mui/material";

export default function IconText(props) {
    const {icon: Icon, children, variant, fontSize} = props
    const theme = useTheme();

    const fs = (variant ? theme.typography[variant] : fontSize) || theme.typography.body1

    return (
        <Stack spacing={0.5} direction="row" alignItems="center" color="text.hint" {...props} sx={{fontSize: fs}}>
            {Icon && <Icon sx={{fontSize: fs.fontSize + 4}}/>}
            <Typography sx={{fontSize: "inherit"}}>{children}</Typography>
        </Stack>
    )
}