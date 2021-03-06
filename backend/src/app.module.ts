import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthModule } from './auth/auth.module';
import { StrapiService } from './strapi/strapi.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [UsersModule, AuthModule, ConfigModule.forRoot({
    isGlobal: true,
    envFilePath: ".env"
  })],
  controllers: [AppController],
  providers: [AppService, AuthService, StrapiService],
})
export class AppModule {}
