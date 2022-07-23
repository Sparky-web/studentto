import { Button } from "@mui/material";
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
        <div>
            <Grid
                container
                alignItems="center"
                justifyContent="center"
                height="100vh"
                width="100%"
            >
                <Grid
                    position="absolute"
                    container
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                    paddingTop="300px"
                ><Button onClick={() => router.push("/students")}>Я просто посмотреть расписание</Button></Grid>
                <AuthForm />
            </Grid>
        </div>
    )
}