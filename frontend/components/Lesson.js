import { Avatar, Paper, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography } from "@mui/material";
import { useBoolean } from 'usehooks-ts'
import LessonModal from "./LessonModal";

export default function Lesson(props) {
    const { lesson } = props
    const { value: isOpen, setTrue: open, setFalse: close } = useBoolean(false)

    console.log(lesson)

    return (
        <Paper elevation={0} variant="elevation">
            <ListItemButton onClick={open}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar>
                            <Typography variant="button">1</Typography>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Summer BBQ"
                        secondary={
                            <>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    to Scott, Alex, Jennifer
                                </Typography>
                                {" — Wish I could come, but I'm out of town this…"}
                            </>
                        }
                    />
                </ListItem>
            </ListItemButton>
        </Paper>
    )
}