import { UsersService } from './users.service';
import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
    constructor(private readonly service: UsersService) {}

    @Get()
    async getAll () {
        return await this.service.getAll()
    }

    @Get(":id")
    async getOne () {
        return await this.service.getOne("")
    }
}
