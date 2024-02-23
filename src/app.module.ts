import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { AlbumController } from './album.controller';
import { UserController } from './user.controller';


@Module({

  // controllers: [UsersController, AlbumController],
  controllers: [UserController],

})
export class AppModule { }
