<<<<<<< HEAD
import { Button, Stack, Typography, Grid } from "@mui/material";
=======
import { Button } from "@mui/material";
>>>>>>> bfe045147d2f1ee2e0bf12534af1824d8758c5e0
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthForm from "../components/AuthForm";
import Grid from "@mui/material/Grid";


export default function Index() {
    const router = useRouter()

    useEffect(() => {
    
    }, [])

    return (
        <Container>
            <Stack
                alignItems="center"
                justifyContent="center"
                height="100vh"
                width="100%"
            >
                <AuthForm />
                <Button onClick={() => router.push("/students")}>Я просто посмотреть расписание</Button>
            </Stack>
        </Container>
    )
}