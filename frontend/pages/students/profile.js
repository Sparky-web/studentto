import Head from 'next/head'
import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import ButtonBar from '../../components/ButtonBar';
import { Container } from '@mui/system';
import PageTitle from "../../components/PageTitle"
import ProfileAvatar from '../../components/ProfileAvatar';
import { Typography } from '@mui/material';
import Score from "../../components/Score"

export default function Profile() {
    const router = useRouter()

    return (
        <div>
            <Head>
                <title>Студентто - Профиль</title>
            </Head>

            <Container>
                <PageTitle text="Профиль" />
                <Stack spacing={2}>
                    <ProfileAvatar />
                    <Stack spacing={2}>
                        <Typography variant="h4" type="section">
                            Успеваемость
                        </Typography>
                        <Stack spacing={1}>
                            <Score score={5} />
                            <Score score={4.2} />
                            <Score score={4.0} />
                            <Score score={3.2} />
                        </Stack>
                    </Stack>
                </Stack>
            </Container>

            <ButtonBar value={1} />
        </div>
    )
}