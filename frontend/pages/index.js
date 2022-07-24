import { Button, Stack, Typography, Grid } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import AuthForm from "../components/AuthForm";


export default function Index() {
    const router = useRouter()

    return (
        <Container>
            <Stack
                spacing={2}
                alignItems="center"
                justifyContent="center"
                height="100vh"
                width="100%"
            >
                <AuthForm/>
                <Button onClick={() => router.push("/students")}>Я просто посмотреть расписание</Button>
            </Stack>
        </Container>
    )
}