import { Box } from "@mui/system"
export default function Highlight(props) {
    return <Box display="contents" sx={{ color: "primary.dark" }} {...props}>{props.children}</Box>
}