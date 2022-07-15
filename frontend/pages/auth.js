import {useReducer, useState} from "react";
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Checkbox from '@mui/material/Checkbox';
import {FormControlLabel} from "@mui/material";
import { useForm } from "react-hook-form";
import axios from 'axios';

export default function Auth() {
    const [hide, setHide] = useState(true);
    const [error, setError] = useState( {eLogin: '',  ePassword: ''} )

    const intValues = {
        login: '',
        password: ''
    }

    const [formValues, setFormValues] = useReducer(
        (curValues, newValues) => ({ ...curValues, ...newValues}), intValues
    )
    const { login, password } = formValues;

    function handleFormChange(event)
    {

        const { name, value } = event.target;
        setFormValues( { [name]: value } );

        switch(name) {
            case 'login': {
                if (!value.length) {
                    setError({...error, eLogin: 'Вы не указали Логин!'});
                } else setError({...error, eLogin: ''});
                break;
            }
            case 'password': {
                if (!value.length) {
                    setError({...error, ePassword: 'Вы не указали Пароль!'});
                } else setError({...error, ePassword: ''});
                break;
            }
        }
    }

    function hidePassword() { setHide(!hide); }
    function submitLogin(e) {
        e.preventDefault();
   /*     axios.get('http://localhost:1337/api/app-users', )
            .then((response) => {console.log(response.data);
            }).catch((error) => {
            console.error(error);
        });*/
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

                        <TextField error={!!error.eLogin} value={formValues.login} name='login' label="Логин" helperText={error.eLogin} variant="outlined" type='text' className='login' onChange={ handleFormChange }/>
                        <TextField error={!!error.ePassword} value={formValues.password} name='password' label="Пароль" helperText={error.ePassword} variant="outlined" type={ hide ? 'password' : 'text' } className='password' onChange={ handleFormChange }/>
                        <FormControlLabel control={<Checkbox checked={!hide} onClick={ hidePassword } size='small' />} label="Показать пароль" />
                        <Button variant="contained" type={'submit'}>Далее</Button>
                    </Stack>
                </form>
            </Grid>
        </Container>
    )
}

