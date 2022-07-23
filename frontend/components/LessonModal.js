import { Modal, Box, Grid, Typography } from "@mui/material";

const modalStyles = {
    position: 'absolute', backgroundColor: '#FFFFF9', boxShadow: 24,  borderRadius: '10px',
    width: '90vw', maxWidth: "500px", height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
}

export default function LessonModal(props) {
    const {isOpen, close, lesson} = props

    return <Modal
        open={isOpen}
        onClose={close}
    >
        <Box sx={modalStyles}>
            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography style={{ color: '#00bfff', paddingTop: 10 }}>{lesson.name}</Typography>
                <Typography style={{ color: '#00bfff' }}>{lesson.date} ({lesson.week})</Typography>
                <Typography style={{ color: '#00bfff' }}>{lesson.professor.lastName} {lesson.professor.firstName} {lesson.professor.veryLastName}</Typography>
            </Grid>
        </Box>
    </Modal>
}