import { useRouter } from "next/router"
import React, { createContext, useEffect, useState } from "react"
import { useBoolean } from 'usehooks-ts'
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Router from 'next/router';
import _ from "lodash"
import ls from "local-storage"

export const AppContext = createContext({})

const protectedRoutes = [
    { route: "/students/profile", redirect: "/students/auth" }
]

export const AppProvider = (props) => {
    const router = useRouter()
    const [value, setValue] = useState({ user: "sosi" })
    const { value: loading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(false)

    useEffect(() => {
        Router.onRouteChangeStart = (url) => {
            const foundRoute = protectedRoutes.find(({ route }) => url.match(new RegExp(route, "ig")))
            if (foundRoute && !ls('jwt')) router.push(foundRoute.redirect)

            startLoading()
        }

        Router.onRouteChangeComplete = (url) => stopLoading()

        Router.onRouteChangeError = (err, url) => stopLoading()
    }, [])



    if (loading) return (<Grid
        container
        direction="row"
        alignItems="center"
        justifyContent="center"
        width="100%"
        height="100vh"
    >
        <CircularProgress />
    </Grid>)

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}