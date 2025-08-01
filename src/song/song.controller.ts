import { Controller, Get,Put,Delete, Post } from '@nestjs/common';

@Controller('song')
export class SongController {
    @Post()
    createsong():string{
        return 'your song is created';
    }
    @Get()
    getsongs():string{
        return 'your all songs';
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
