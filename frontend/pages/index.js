import Head from 'next/head'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Analytics, AccountBox } from '@mui/icons-material';
import { useState } from "react";
import { useRouter } from "next/router";
import Paper from '@mui/material/Paper';
import { Avatar, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Modal, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Lesson from "../components/Lesson.js"

const modalStyles = {
    position: 'absolute', backgroundColor: '#FFFFF9', border: '2px solid #000', boxShadow: 24,
    width: '90vw', maxWidth: "500px", height: '500px', top: '50%', left: '50%', transform: 'translate(-50%, -50%)'
}

export default function Home() {
    const router = useRouter()

    const [value, setValue] = useState(0);
    const [modalData, setModalData] = useState(null);

    const onLink = (href) => {
        router.push(href);
    };

    const [data, setData] = useState({
        date: '20.11.2022',
        lessons: [
            {
                id: 0,
                start: '8:30',
                end: '10:00',
                name: 'Математика',
                professor: {
                    firstName: 'Алексей',
                    lastName: 'Еремеев',
                    veryLastName: 'Леонидович'
                },
                comment: "комментарий"
            }, {
                id: 1,
                start: '10:10',
                end: '11:40',
                name: 'Русский',
                professor: {
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                }
            }, {
                id: 2,
                start: '12:10',
                end: '13:40',
                name: 'Литература',
                professor: {
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                }
            }, {
                id: 3,
                start: '14:10',
                end: '15:40',
                name: 'Информатика',
                professor: {
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                }
            }, {
                id: 4,
                start: '16:00',
                end: '17:30',
                name: 'Информатика',
                professor: {
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                }
            }, {
                id: 5,
                start: '18:00',
                end: '19:30',
                name: 'Физика',
                professor: {
                    firstName: 'Александр',
                    lastName: 'Кравцов',
                    veryLastName: 'Сергеевич'
                }
            }, {
                id: 6,
                start: '19:40',
                end: '21:10',
                name: 'Физика',
                professor: {
                    firstName: 'Александр',
                    lastName: 'Кравцов',
                    veryLastName: 'Сергеевич'
                }
            }
        ]
    });

    return (
        <div>
            <Head>
                <title>Студентто</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Grid
                container
                direction="column"
                alignItems="center"
                justifyContent="center"
                paddingBottom={8}
            >
                <Typography>{data.date}</Typography>
                <Box sx={{ width: '380px', height: '3px', backgroundColor: '#000000' }} />

                <Modal
                    open={modalData}
                    onClose={() => setModalData(null)}
                >
                    <Box sx={modalStyles}>
                        {modalData.name}
                    </Box>
                </Modal>

                <Stack sx={{ width: '100%', maxWidth: 380 }} spacing={1}>
                    {data.lessons.map(lesson => <Lesson lesson={lesson} modalData={modalData} setModalData={setModalData} key={lesson.id} />)}
                </Stack>
            </Grid>

            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Расписание" icon={<Analytics />} />
                    <BottomNavigationAction label="Профиль" onClick={() => onLink("/auth")} icon={<AccountBox />} />
                </BottomNavigation>
            </Paper>
        </div>
    )
}
