import {Avatar, ListItem, ListItemAvatar, ListItemButton, ListItemText, Typography} from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Lesson ( props ) {
    return (
        <Paper key={props.lesson.id}>
            <ListItemButton onClick={props.setModalData(!props.modalData)}>
                <ListItem>
                    <ListItemAvatar>
                        <Avatar>{props.lesson.id + 1}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={
                            <div>
                                <Typography style={{color: '#00bfff'}}>{props.lesson.name}</Typography>
                                <Typography>{props.lesson.professor.lastName + ' ' + props.lesson.professor.firstName + ' ' + props.lesson.professor.veryLastName}</Typography>
                            </div>
                        }
                        secondary={props.lesson.start + ' - ' + props.lesson.end}
                    ></ListItemText>
                </ListItem>
            </ListItemButton>
        </Paper>
    )
}