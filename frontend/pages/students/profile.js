import Head from 'next/head'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import ls from "local-storage"
import { useRouter } from 'next/router';
import {CircularProgress} from "@mui/material";
import Grid from "@mui/material/Grid";

export default function Profile() {
    const router = useRouter()
    console.log("hello", !!ls("jwt"))

    const deauth = async () => {
        ls("jwt", '')
        router.push("/")
    }

    return (
        <div>
            <Head>
                <title>Студентто - Профиль</title>
            </Head>

            <Box sx={{ backgroundColor: '#CCCC', width: '100%' }}>
                <Stack spacing={2} direction={'row'} justifyContent={'right'} sx={{ p: 1 }}>
                    <div>
                        <Button variant="contained" onClick={deauth}>Выйти</Button>
                    </div>
                </Stack>
            </Box>
        </div>
    )
}