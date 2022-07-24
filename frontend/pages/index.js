import {Button, Stack, Typography, Divider} from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import AuthForm from "../components/AuthForm";
import Image from "next/image"
import { useState, useEffect } from "react";
import strapi from "../modules/strapi";

const myLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&q=${quality || 75}`
}


export default function Index() {
    const router = useRouter()
    const [image, setImage] = useState(null)

    useEffect(() => {
        async function f() {
            const [urtk] = await strapi.get("schools", { populate: "*" })
            setImage(urtk.image?.data?.attributes.url)
        }
        f()
    }, [])


    return (
        <div style={{height: "100vh"}}>
            {image && <Image
                loader={myLoader}
                src={image}
                height={80}
                objectFit="fill"
                width={"100%"}
                layout="responsive"
            />}
            <Container>
                <Stack
                marginTop={3}
                    spacing={1}
                    alignItems="center"
                    justifyContent="center"
                    width="100%"
                >

                    <AuthForm />
                    <Button onClick={() => router.push("/students")}>
                        <Typography variant="caption">Я только посмотреть расписание</Typography>
                    </Button>
                </Stack>
                <Divider sx={{marginTop: 1}}/>
            </Container>
        </div>
    )
}