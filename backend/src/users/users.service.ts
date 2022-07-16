import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { stringify } from "qs"

export type User = any;

@Injectable()
export class UsersService {
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
    }
}
