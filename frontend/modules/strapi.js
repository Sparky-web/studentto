import _axios from "axios";
import Cookies from "js-cookie"
import { stringify } from "qs"

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

// converts {id: 0, attributes: {...}} to {id: 0, ...} even if nested
const excludeAttributes = data => {
    if (data?.data) return excludeAttributes(data.data)
    if (Array.isArray(data)) return data.map(e => excludeAttributes(e))
    if (data?.attributes) return ({ id: data.id, ...excludeAttributes(data.attributes) })

    if (typeof data === "object" && data !== null) {
        let newObject = {}

        for (let key of Object.keys(data)) {
            newObject[key] = excludeAttributes(data[key])
        }

        return newObject
    }

    return data
}

async function get(type, options) {
    const { data: { data } } = await axios.get(`/${type}?${stringify({ ...options })}`)
    return excludeAttributes(data)
}

async function getOne(type, id, options) {
    const { data } = await axios.get(`/${type}/${id}?${stringify({ ...options })}`)
    return data
}

async function create(type, data, options) {
    const { data: { data: res } } = await axios.post(`/${type}`, { data }, options)
    return { id: res.id, ...res.attributes }
}

async function update(type, data, options) {
    const { data: { data: res } } = await axios.put(`/${type}/${data.id}`, { data }, options)
    return { id: res.id, ...res.attributes }
}

const strapi = { get, create, update, auth, getOne }
export default strapi


