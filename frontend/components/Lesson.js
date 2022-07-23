import {Avatar, Paper, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import { useBoolean } from 'usehooks-ts'
import LessonModal from "./LessonModal";

export default function Lesson ( props ) {
    const {lesson} = props
    const {value: isOpen, setTrue: open, setFalse: close} = useBoolean(false)

    return (
        <Paper key={lesson.id}>
            <ListItemButton onClick={open}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>{lesson.id + 1}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <div>
                                <Typography style={{color: '#00bfff'}}>{lesson.name}</Typography>
                                <Typography>{lesson.professor.lastName + ' ' + lesson.professor.firstName + ' ' + lesson.professor.veryLastName}</Typography>
                            </div>
                        }
                        secondary={lesson.start + ' - ' + lesson.end}
                    ></ListItemText>
                </ListItem>
            </ListItemButton>
            <LessonModal lesson={lesson} isOpen={isOpen} close={close} />
        </Paper>
    )
}