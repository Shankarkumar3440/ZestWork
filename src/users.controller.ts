import { Controller, Get, Post, Put, Delete, Req, HttpCode, Res, Header, Redirect, Param, Query, Headers, Body } from "@nestjs/common";
import { Request, Response } from "express";

interface VideoParams {
    id: number
    name: string
    date: string
}

@Controller('/users')
export class UsersController {
    // @Post("/profile")
    // @HttpCode(200)
    // @Redirect('/users/account', 302)

    //set header
    // @Header('Cache-Control', 'none')
    // @Header('X-name', 'Rashid')

    // getProfile(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
    // getProfile(@Req() req: Request) {
    //     // res.status(200);
    //     // // res.json({
    //     // //     name: "Shankar",
    //     // // });  
    //     return {
    //         hello: 'profile',
    //     }
    // }

    //Redirect to another route
    // @Get('/account')
    // redirectRoute() {
    //     return 'Account Parameter';

    // }



    // Route Parameter
    // @Get('/videos/:id/:name')
    // getRoute(@Param() params: VideoParams) {
    //     console.log(params.name, params.id);
    //     return 'Route Parameter';
    // }

    // Query Parameter
    // @Get('/videos')
    // getRoute(@Query() Query: VideoParams) {
    //     console.log(Query.id, Query.name);
    //     return 'Route Parameter';
    // }

    // Headers Parameter
    // @Get('/videos')
    // getRoute(@Headers() Headers: VideoParams) {
    //     console.log(Headers);
    //     return 'Route Parameter';
    // }

    // Body Parameter  // 
    @Get('/videos')
    getRoute(@Body() requestedData: VideoParams) {
        console.log(requestedData.name, requestedData.id, requestedData.date);
        return 'Route Parameter';
    }


}




