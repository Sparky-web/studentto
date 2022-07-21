import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Lesson ( props ) {
    const {lesson, modalData, setModalData} = props

    return (
        <Paper key={lesson.id}>
            <ListItemButton onClick={ () => setModalData(lesson)}>
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
        </Paper>
    )
}