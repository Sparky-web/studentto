import { AppUser } from './../../../dashboard/models/types';
import { StrapiService } from './../strapi/strapi.service';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { stringify } from "qs"

export type User = any;

@Injectable()
export class UsersService {
<<<<<<< HEAD
    constructor(private readonly strapi: StrapiService) { }

    async getOne(username: string): Promise<AppUser | undefined> {
        return await this.strapi.get("app-users", {filters: {username}})
    }

    async getAll(): Promise<Array<AppUser>> {
        return await this.strapi.get("app-users")
=======
    async findOne(username: string): Promise<User | undefined> {
        try {
            const { data: { data: [{ attributes: user }] } } = await axios.get("http://localhost:1337/api/app-users?" + stringify({
                filters: {
                    username
                }
            }))
            return user
        } catch (e) {
            return null
        }
>>>>>>> 727bbd65ce5eb07032dfb22d0a0ce52961cde8bf
    }
}
