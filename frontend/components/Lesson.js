import {
    Avatar,
    Paper,
    ListItem,
    ListItemAvatar,
    ListItemButton,
    ListItemText,
    Typography,
    Chip, Stack, Divider, Button, Collapse
} from "@mui/material";
import { useBoolean } from 'usehooks-ts'
import { AttachFile, Person, Room } from "@mui/icons-material";
import IconText from "./IconText";
import { getFullName } from "../modules/helpers";

export default function Lesson(props) {
    const { lesson } = props
    const { value: isOpen, toggle } = useBoolean(false)

    console.log(lesson)

    return (
        <Paper elevation={isOpen ? 1 : 0} variant="elevation" >
            <ListItemButton onClick={toggle}
                sx={{ flexDirection: "column", alignItems: "start", cursor: "pointer", p: 0 }}
                disableRipple
                disableTouchRipple
            >
                <ListItem alignItems="center">
                    <ListItemAvatar sx={{minWidth: "36px"}}>
                        <Avatar sx={{ backgroundColor: "primary.lightest", borderRadius: "16px", width: "36px", height: "36px", mr: 2}}>
                            <Typography color="primary" variant="actionL">1</Typography>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Математика" secondary={<Stack spacing={0.5} mt={0.5}>
                        <IconText icon={Room} variant="subtitle2">{lesson.classroom?.title}: {lesson.classroom?.building} корпус {lesson.classroom?.floor} этаж</IconText>
                        <IconText icon={Person} variant="subtitle2">{getFullName(lesson.professor)}</IconText>
                    </Stack>} />
                    <Chip label="11:30"/>
                </ListItem>
            </ListItemButton>
            <Collapse in={isOpen}>
                <Stack spacing={2} sx={{ width: "100%", pl: 2, pr: 2, pb: 2 }} >
                    <Divider sx={{ width: "100%" }} />
                    <Stack spacing={1}>
                        <Typography variant="captionM" color="text.hint">Комментарий:</Typography>
                        <Typography variant="body2">{lesson.comments[0].text}</Typography>
                    </Stack>
                    <Stack spacing={1}>
                        <Typography variant="captionM" color="text.hint">Дополнительные материалы:</Typography>
                        <Button
                            variant="link"
                            disableRipple
                            disableFocusRipple
                            disableTouchRipple
                            disableElevation
                            sx={{fontSize: "actionM"}}
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