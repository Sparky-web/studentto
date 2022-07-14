import {useState} from "react"
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";

export default function Auth() {
    const [hide, setHide] = useState(false);
    function hidePassword() {
        setHide(!hide);
    }

    function submitLogin(e){
        e.preventDefault();
    }

    return (
        <Container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '100vh' }}
            >
                <form onSubmit={ submitLogin }>
                    <Stack spacing={2} justifyContent={'center'}>
                        <TextField label="Логин" variant="outlined" type='text' className='login' />
                        <TextField label="Пароль" variant="outlined" type={ hide ? 'password' : 'text' } className='password' />
                        <FormControlLabel control={<Checkbox onClick={ hidePassword } size='small' />} label="Показать пароль" />
                        <Button variant="contained" type={'submit'}>Далее</Button>
                    </Stack>
                </form>
            </Grid>
        </Container>
    )
}

