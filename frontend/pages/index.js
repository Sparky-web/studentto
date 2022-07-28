import { Button, Stack, Typography, Divider, Box } from "@mui/material";
import { Container } from "@mui/system";
import { useRouter } from "next/router";
import AuthForm from "../components/AuthForm";
import Image from "next/image"
import { useState, useEffect } from "react";
import strapi from "../modules/strapi";
import Highlight from "../components/Highlight";
import { getBase64ImageUrl } from "../modules/images";
import styles from "../styles/Index.module.css"

const myLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_STRAPI_URL}${src}?w=${width}&q=${quality || 75}`
}


export default function Index({ image, imagePlaceholder }) {
    const router = useRouter()

    return (
        <div style={{ height: "100vh" }}>
            <Box width={"100%"} height={"35vh"} position="relative" className={styles.image} >
                {image && <Image
                    loader={myLoader}
                    blurDataURL={imagePlaceholder}
                    placeholder="blur"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                />}
            </Box>
            <Container>
                <Stack width="100%" alignItems={"center"} justifyContent="center" mt={5}>
                    <Stack
                        spacing={1}
                        width="100%"
                        maxWidth={"400px"}
                    >
                        <Typography variant="h1" mb={2} sx={{ color: "text.primary" }}>Привет! <br />Для продолжения <Highlight>войди в систему</Highlight></Typography>
                        <AuthForm />
                        <Button onClick={() => router.push("/students")}>
                            <Typography variant="caption">Я только посмотреть расписание</Typography>
                        </Button>
                    </Stack>
                </Stack>

            </Container>
        </div>
    )
}

Index.getInitialProps = async ctx => {
    const [urtk] = await strapi.get("schools", { populate: "*" })

    const placeholder = await getBase64ImageUrl(myLoader({ src: urtk.image?.data?.attributes.formats.thumbnail.url }))
    return {
        image: urtk.image?.data?.attributes.url,
        imagePlaceholder: placeholder
    }
}