import Head from 'next/head'
import { useEffect, useState } from "react";
import { LinearProgress, Modal, Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Lesson from "../../components/Lesson.js"
import ButtonBar from "../../components/ButtonBar"
import { DateTime } from "luxon";
import strapi from "../../modules/strapi"
import { Container } from '@mui/system';
import PageTitle from "./../../components/PageTitle"
import WeekBar from "../../components/WeekBar";

export default function Home() {
    const time = DateTime.now().setZone("system").setLocale("ru");
    const [lessons, setLessons] = useState(null)

    useEffect(() => {
        async function init() {
            const data = await strapi.get("lessons", {
                filters: {
                    groups: 1,
                },
                populate: "*"
            })
            setLessons(data)
        }
        init()
    }, [])


    return (
        <div>
            <Head>
                <title>Студентто</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Container>
                <PageTitle text={"Расписание: ИС-115"} />
                <Grid
                    display={"flex"}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    paddingBottom={8}
                >
                    <Stack sx={{ width: '100%', maxWidth: 390 }} spacing={1}>
                        <WeekBar />
                        {lessons && lessons.map(lesson => <Lesson lesson={lesson} key={lesson.id} />)}
                        {!lessons && <LinearProgress />}
                    </Stack>
                </Grid>
            </Container>

            <ButtonBar value={0} />
        </div>
    )
}
