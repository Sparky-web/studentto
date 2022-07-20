import Head from 'next/head'
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Analytics, AccountBox } from '@mui/icons-material';
import {useState} from "react";
import { useRouter } from "next/router";
import Paper from '@mui/material/Paper';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography} from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";

export default function Home() {
    const [value, setValue] = useState(0);
    const router = useRouter();
    const onLink = (href) => {
        router.push(href);
    };

    const [Data, setData] = useState({
        date: '20.11.2022',
        lessons: [
            {
                id: 0,
                start: '8:30',
                end: '10:00',
                name: 'Математика',
                professor:{
                    firstName: 'Алексей',
                    lastName: 'Еремеев',
                    veryLastName: 'Леонидович'
                }
            }, {
                id: 1,
                start: '10:10',
                end: '11:40',
                name: 'Русский',
                professor:{
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                }
            }, {
                id: 2,
                start: '12:10',
                end: '13:40',
                name: 'Литература',
                professor:{
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                }
            }, {
                id: 3,
                start: '14:10',
                end: '15:40',
                name: 'Информатика',
                professor:{
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                }
            }, {
                id: 4,
                start: '16:00',
                end: '17:30',
                name: 'Информатика',
                professor:{
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                }
            }, {
                id: 5,
                start: '18:00',
                end: '19:30',
                name: 'Физика',
                professor:{
                    firstName: 'Александр',
                    lastName: 'Кравцов',
                    veryLastName: 'Сергеевич'
                }
            }, {
                id: 6,
                start: '19:40',
                end: '21:10',
                name: 'Физика',
                professor:{
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
            <div style={{ marginBottom: 60 }}>
                <Grid
                    container
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                >
                    <Typography style={{color: '#909090'}}>{Data.date}</Typography>
                    <List sx={{ width: '100%', maxWidth: 380 }}>
                        <Stack spacing={1}>
                            {Data.lessons.map((lesson) => {
                                return (
                                    <Paper key={lesson.id}>
                                        <ListItem button={true}>
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
                                    </Paper>
                                    )
                                })}
                        </Stack>
                    </List>
                </Grid>
            </div>
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
