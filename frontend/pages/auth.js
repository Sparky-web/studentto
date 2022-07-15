import { useReducer, useState } from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import { FormControlLabel } from "@mui/material";
import Head from "next/head";

export default function Auth() {
    const [hide, setHide] = useState(true);
    const [error, setError] = useState({ login: '', password: '' })

    const intValues = {
        login: '',
        password: ''
    }

    const [form, setForm] = useReducer(
        (curValues, newValues) => ({ ...curValues, ...newValues }), intValues
    )

    function handleFormChange(event) {
        const { name, value } = event.target;
        setForm({ [name]: value });
    }

    function hidePassword() { setHide(!hide); }

    function submitLogin(e) {
        const error = {
            login: !form.login && "Строка не должна быть пустой",
            password: !form.password && "Строка не должна быть пустой"
        }
        setError(error);
        e.preventDefault();
    }

    return (
        <div>
            <Head>
                <title>Студентто - Профиль</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Container>
                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    style={{ minHeight: '100vh' }}
                >
                    <form onSubmit={submitLogin}>
                        <Stack spacing={2} justifyContent={'center'} sx={{width: "400px"}}>
                            <TextField error={!!error.login} value={form.login} name='login' label="Логин" helperText={error.login} variant="outlined" type='text' className='login' onChange={handleFormChange} />
                            <TextField error={!!error.password} value={form.password} name='password' label="Пароль" helperText={error.password} variant="outlined" type={hide ? 'password' : 'text'} className='password' onChange={handleFormChange} />
                            <FormControlLabel control={<Checkbox checked={!hide} onClick={hidePassword} size='small' />} label="Показать пароль" />
                            <Button variant="contained" type={'submit'}>Далее</Button>
                        </Stack>
                    </form>
                </Grid>
            </Container>
        </div>
    )
}

