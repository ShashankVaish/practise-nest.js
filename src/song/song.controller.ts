import { Controller, Get,Put,Delete, Post, Body } from '@nestjs/common';
import {SongService} from './song.service'
import {SongValidatorClass} from '../DTO/song-validator-class';
@Controller('song')
export class SongController {
    constructor(private readonly songsService: SongService){}

    @Post()
    createsong(@Body() songvalidater:SongValidatorClass){
        return this.songsService.createSong("songvalidater");
    }
    @Get()
    getsongs():string{
        return this.songsService.getAllsongs().toString();
    }
    @Get(':id')
    getsong():string{
        return 'your song is';
    }
    @Put(':id')
    updatesong():string{
        return 'your  song is updated';
    }
    @Delete(':id')
    deletesong():string{
        return 'your song is deleted';
    }
    
}
