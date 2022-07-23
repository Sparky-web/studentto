import { Button, Stack, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import { useEffect } from "react";
import AuthForm from "../components/AuthForm";


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
                spacing={2}
                width="100%"
            >
                <AuthForm />
                <Button onClick={() => router.push("/students")}>Я просто посмотреть расписание</Button>
            </Stack>
        </Container>
    )
}