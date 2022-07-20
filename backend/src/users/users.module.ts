import { StrapiService } from './../strapi/strapi.service';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';

@Module({
  providers: [UsersService, StrapiService],
  exports: [UsersService],
  controllers: [UsersController]
})
export class UsersModule { }
