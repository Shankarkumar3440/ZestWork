import { Controller, Get } from "@nestjs/common";



@Controller('album')
export class AlbumController {
    @Get()
    getProfile() {
        return 'photo';
    }

}
