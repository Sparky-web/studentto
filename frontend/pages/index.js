import Head from 'next/head'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Box from '@mui/material/Box';
import Grid from "@mui/material/Grid";
import Link from 'next/link';
import {FormControlLabel} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Студентто</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Box sx={{backgroundColor: '#CCCC', width: '100%'}}>
            <Stack spacing={2} direction={'row'} justifyContent={'right'} sx={ {p: 1 }}>
                <div>
                    <Link href="/auth" passHref>
                        <Button variant="contained">Профиль</Button>
                    </Link>
                </div>
            </Stack>
        </Box>
        <Box sx={{width: '100%', height: '150px'}}>
            <Stack spacing={2} direction={'row'} justifyContent={'center'} sx={ {p: 1 }}>
                <div>

                </div>
            </Stack>
        </Box>
    </div>
  )
}
