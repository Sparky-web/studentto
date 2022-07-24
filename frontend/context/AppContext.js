import { useRouter } from "next/router"
import React, { createContext, useEffect, useState } from "react"
import { useBoolean } from 'usehooks-ts'
import { Grid } from "@mui/material";
import { CircularProgress } from "@mui/material";
import Router from 'next/router';
import _ from "lodash"
import Cookies from "js-cookie";

export const AppContext = createContext({})

export const AppProvider = (props) => {
    const router = useRouter()
    const [value, setValue] = useState({ user: "sosi" })
    const [auth, setAuth] = useState(false)
    const { value: loading, setFalse: stopLoading, setTrue: startLoading } = useBoolean(false)

    useEffect(() => {
        checkAuth(router.asPath)
        
        Router.onRouteChangeStart = (url) => {
            setAuth(false)
            startLoading()
        }

        Router.onRouteChangeComplete = (url) => {
            stopLoading()
            checkAuth(url)
        }

        Router.onRouteChangeError = (err, url) => stopLoading()
    }, [])

    function checkAuth (url) {
        const protectedRoutes = [
            {from: "/students/profile", to: "/students/auth"},
        ];

        const path = url.split('?')[0];
        const found = protectedRoutes.find(({from}) => path.match(new RegExp(from, "ig")))

        if (!Cookies.get("jwt") && found) {
            setAuth(false);
            router.push({
                pathname: found.to,
                query: { returnUrl: router.asPath }
            });
        } else {
            setAuth(true);
        }
    }

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

    if(!auth) return null

    return <AppContext.Provider value={value}>
        {props.children}
    </AppContext.Provider>
}