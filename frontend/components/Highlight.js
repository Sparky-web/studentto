import { Box } from "@mui/system"
export default function Highlight(props) {
    return <Box display="contents" sx={{ color: "text.highlight" }} {...props}>{props.children}</Box>
}