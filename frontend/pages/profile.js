import Head from 'next/head'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Profile(){
    return (
        <div>
            <Head>
                <title>Студентто - Профиль</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Box sx={{backgroundColor: '#CCCC', width: '100%'}}>
                <Stack spacing={2} direction={'row'} justifyContent={'right'} sx={ {p: 1 }}>
                    <div>
                        <Link href="/auth" passHref>
                            <Button variant="contained">Выйти</Button>
                        </Link>
                    </div>
                </Stack>
            </Box>
        </div>
    )
}