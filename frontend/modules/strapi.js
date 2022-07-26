import _axios from "axios";
import Cookies from "js-cookie"
import {stringify} from "qs"

const axios = _axios.create({
    baseURL: process.env.NEXT_PUBLIC_STRAPI_URL + "/api",
})

axios.interceptors.request.use(config => {
    const jwt = Cookies.get("jwt")
    if (jwt) config.headers.Authorization = "Bearer " + jwt
    return config
})

axios.interceptors.response.use(res => res, error => {
    console.error(error)

    //const status = error.response.status
    // if (status === "401") {
    //     router.push("/auth")
    //     return
    // }

    throw error
})

const auth = async (identifier, password) => {
    const { data } = await axios.post("auth/local", {
        identifier,
        password
    })
     
    Cookies.set("jwt", data.jwt)
    return true
}

async function get(type, options) {
    const { data: { data } } = await axios.get(`/${type}?${stringify({ pagination: { limit: 100 }, ...options })}`)
    return Array.isArray(data) ? data.map(e => ({ id: e.id, ...e.attributes })) : { id: data.id, ...data.attributes }
}

async function create(type, data, options) {
    const { data: { data: res } } = await axios.post(`/${type}`, { data }, options)
    return { id: res.id, ...res.attributes }
}

async function update(type, data, options) {
    const { data: { data: res } } = await axios.put(`/${type}/${data.id}`, { data }, options)
    return { id: res.id, ...res.attributes }
}

const strapi = { get, create, update, auth }
export default strapi


