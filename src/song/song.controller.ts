import { Controller, Get,Put,Delete, Post } from '@nestjs/common';
import {SongService} from './song.service'
@Controller('song')
export class SongController {
    constructor(private readonly songsService: SongService){}

    @Post()
    createsong(){
        return this.songsService.createSong("saiyaara by arjit singh")
    }
    @Get()
    getsongs():string{
        return this.songsService.getAllsongs().toString();
    }
    @Get(':id')
    getsong():string{
        return 'your  song is ';
    }
    @Put(':id')
    updatesong():string{
        return 'your  song is updated ';
    }
    @Delete(':id')
    deletesong():string{
        return 'your  song is deleted ';
    }
    
}
