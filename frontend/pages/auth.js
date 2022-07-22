import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Head from "next/head";
import ButtonBar from "../components/ButtonBar";
import AuthForm from "../components/AuthForm"

export default function Auth() {
    return (
        <div>
            <Head>
                <title>Студентто - Авторизация</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <AuthForm />
            </Grid>
            <ButtonBar value={1} />
        </div>
    )
}

