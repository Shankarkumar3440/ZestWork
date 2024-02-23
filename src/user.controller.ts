import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UsersController } from "./users.controller";
import { CreateUserDTO } from "./dto";
import { get } from "http";

let USERS = []

@Controller('users')
export class UserController {

    @Post()
    getProfile(@Body() createUserDTO: CreateUserDTO) {
        USERS.push(createUserDTO);
        return 'User Added'
    }
    @Get()
    getUsers() {
        return USERS;
    }
    @Get(':id')
    getUserId(@Param('id') id: number) {
        return USERS.find(user => +user.id === +id)
    }
    @Put(':id')
    getUpdateCreateId(@Param('id') id: number, @Body() createUserDTO: CreateUserDTO) {
        const idx = USERS.findIndex(user => +user.id === +id)

        if (!idx) {
            return 'User Not Found'
        } else {
            USERS[idx] = createUserDTO
            return 'User Updated'

        }
    }
    @Delete(':id')
    getDeleteId(@Param('id') id: number) {
        USERS = USERS.filter(user => +user.id === +id)

    }

}