import Head from 'next/head'
import { useState } from "react";
import { Modal, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Lesson from "../../components/Lesson.js"
import ButtonBar from "../../components/ButtonBar"
import {DateTime} from "luxon";

export default function Home() {
    const time = DateTime.now().setZone("system").setLocale("ru");
    const [data, setData] = useState({
        date: '20.11.2022',
        week: time.toFormat("EEEE"),
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
                comment: ""
            }, {
                id: 1,
                start: '10:10',
                end: '11:40',
                name: 'Русский',
                professor: {
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                },
                comment: ""
            }, {
                id: 2,
                start: '12:10',
                end: '13:40',
                name: 'Литература',
                professor: {
                    firstName: 'Наталья',
                    lastName: 'Соколова',
                    veryLastName: 'Георгиевная'
                },
                comment: ""
            }, {
                id: 3,
                start: '14:10',
                end: '15:40',
                name: 'Информатика',
                professor: {
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                },
                comment: ""
            }, {
                id: 4,
                start: '16:00',
                end: '17:30',
                name: 'Информатика',
                professor: {
                    firstName: 'Андрей',
                    lastName: 'Зырянов',
                    veryLastName: 'Владимирович'
                },
                comment: ""
            }, {
                id: 5,
                start: '18:00',
                end: '19:30',
                name: 'Физика',
                professor: {
                    firstName: 'Александр',
                    lastName: 'Кравцов',
                    veryLastName: 'Сергеевич'
                },
                comment: ""
            }, {
                id: 6,
                start: '19:40',
                end: '21:10',
                name: 'Физика',
                professor: {
                    firstName: 'Александр',
                    lastName: 'Кравцов',
                    veryLastName: 'Сергеевич'
                },
                comment: ""
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

                <Stack sx={{ width: '100%', maxWidth: 380 }} spacing={1}>
                    {data.lessons.map(lesson => <Lesson lesson={lesson} key={lesson.id} />)}
                </Stack>
            </Grid>

            <ButtonBar value={0}/>
        </div>
    )
}
