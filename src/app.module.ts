import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { GraphQLModule } from '@nestjs/graphql';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    RolesModule,
    AuthModule,
    UsersModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
    }),
  ] ,
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
