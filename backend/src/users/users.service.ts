import { AppUser } from './../../../dashboard/models/types';
import { StrapiService } from './../strapi/strapi.service';
import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { stringify } from "qs"

export type User = any;

@Injectable()
export class UsersService {
    constructor(private readonly strapi: StrapiService) { }

    async getOne(username: string): Promise<AppUser | undefined> {
        return await this.strapi.get("app-users", {filters: {username}})
    }

    async getAll(): Promise<Array<AppUser>> {
        return await this.strapi.get("app-users")
    }
}
