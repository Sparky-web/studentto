import { useReducer, useState } from "react";
import {Button, Stack, TextField, Checkbox, FormControlLabel} from '@mui/material';
import strapi from "../modules/strapi";
import { useRouter } from "next/router";

export default function AuthForm() {
    const [hide, setHide] = useState(true);
    const [error, setError] = useState({ login: '', password: '' })
    const router = useRouter()

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

    async function submitLogin(e) {
        try {
            e.preventDefault();
            const error = {
                login: !form.login && "Строка не должна быть пустой",
                password: !form.password && "Строка не должна быть пустой"
            }
            setError(error);

            await strapi.auth(form.login, form.password)
            router.push("/students/profile")
        } catch (e) {
            console.error(e)
            alert("Ошибка")
        }
    }


    return (
        <form onSubmit={submitLogin}>
            <Stack spacing={2} justifyContent={'center'} sx={{width: "calc(100vw - 32px)", maxWidth: "400px"}}>
                <TextField fullWidth={true} error={!!error.login} value={form.login} name='login' label="Логин" helperText={error.login} variant="outlined" type='text' className='login' onChange={handleFormChange} />
                <TextField fullWidth={true} error={!!error.password} value={form.password} name='password' label="Пароль" helperText={error.password} variant="outlined" type={hide ? 'password' : 'text'} className='password' onChange={handleFormChange} />
                <FormControlLabel control={<Checkbox checked={!hide} onClick={hidePassword} size='small' />} label="Показать пароль" />

                <Button variant="contained" type={'submit'}>Далее</Button>
            </Stack>
        </form>
    )
}