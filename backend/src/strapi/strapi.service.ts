import { Injectable } from '@nestjs/common';
import _axios from 'axios';
import * as qs from "qs"

type type = "app-users" | "app-roles" | "lessons"

@Injectable()
export class StrapiService {
    axios = _axios.create({ baseURL: process.env.STRAPI_URL + "/api" })

    async get(type: type, filters?: any | undefined, options = {}) {
        const { data: { data } } = await this.axios.get(`/${type}?${qs.stringify({ pagination: { limit: 100 }, ...filters })}`, { ...options })
        return Array.isArray(data) ? data.map(e => ({ id: e.id, ...e.attributes })) : { id: data.id, ...data.attributes }
    }

    async create(type: type, data: any | undefined, options = {}) {
        const { data: { data: res } } = await this.axios.post(`/${type}`, { data }, options)
        return { id: res.id, ...res.attributes }
    }

    async update(type: type, data: any | undefined, options = {}) {
        const { data: { data: res } } = await this.axios.put(`/${type}/${data.id}`, { data }, options)
        return { id: res.id, ...res.attributes }
    }
}

