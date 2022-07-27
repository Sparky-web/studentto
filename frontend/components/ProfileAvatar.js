import { Avatar, Stack, Typography } from "@mui/material"
import Image from "next/image"
import Profile from "../images/Avatar.svg"


export default function ProfileAvatar({ user }) {
    return (
        <Stack spacing={2} alignContent="center" alignItems="center">
            <Avatar sx={{ width: "80px", height: "80px", background: "none" }}>
                <Image src={Profile} layout={"fill"} />
            </Avatar>
            <Stack spacing={1} alignItems="center">
                <Typography variant="h3">
                    Владислав Бабинов
                </Typography>
                <Typography variant="bodyS">
                    @babinov*is215
                </Typography>
            </Stack>
        </Stack>
    )
}