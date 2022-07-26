import {
    Avatar,
    Paper,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
    Chip, Stack, Divider, Link, Button, Collapse
} from "@mui/material";
import { useBoolean } from 'usehooks-ts'
import { AttachFile, Room } from "@mui/icons-material";

export default function Lesson(props) {
    const { lesson } = props
    const { value: isOpen, toggle } = useBoolean(false)

    console.log(lesson)

    return (
        <Paper elevation={isOpen ? 1 : 0} variant="elevation" >
            <ListItemButton onClick={toggle}
                sx={{ flexDirection: "column", alignItems: "start", cursor: "pointer" }}
                disableRipple
                disableTouchRipple
            >
                <ListItem alignItems="center">
                    <ListItemAvatar>
                        <Avatar sx={{ backgroundColor: isOpen ? "white" : "primary.lightest" }}>
                            <Typography color="primary" variant="button">1</Typography>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Математика" secondary={<>
                        <Stack spacing={0.5} direction="row" alignItems="center" color="text.hint">
                            <Room sx={{ fontSize: "small" }} />
                            <Typography variant="body2">405 ауд. 1 этаж</Typography>
                        </Stack>
                        <Typography variant="body2" color="text.hint">Еремеев Алексей Леонидович</Typography>
                    </>} />
                    <Chip label={<Typography variant="button">11:30</Typography>} sx={{ backgroundColor: isOpen ? "primary.main" : "primary.lightest", color: isOpen ? "White" : "primary.main" }} />
                </ListItem>
            </ListItemButton>
            <Collapse in={isOpen}>
                <Stack spacing={2} sx={{ width: "100%", pl: 3, pr: 3, pb: 3 }} >
                    <Divider sx={{ width: "100%" }} />

                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.hint">Комментарий:</Typography>
                        <Typography variant="body2">Гаев лучший</Typography>
                    </Stack>

                    <Stack spacing={1}>
                        <Typography variant="caption" color="text.hint">Дополнительные материалы:</Typography>
                        <Button
                            variant="link"
                            disableRipple
                            disableFocusRipple
                            disableTouchRipple
                            disableElevation
                            // sx={{ padding: 0.5 }}
                            startIcon={<AttachFile sx={{ fontSize: "small" }}
                            />}>
                            Лабораторная работа 3.docx
                        </Button>
                    </Stack>

                </Stack>
            </Collapse>

        </Paper>
    )
}