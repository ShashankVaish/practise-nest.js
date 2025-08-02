import { Injectable } from '@nestjs/common';

@Injectable()
export class SongService {
    
    private  readonly songs:string[] = [];
    createSong(song) {
        this.songs.push(song);

        return this.songs;

    }
    getAllsongs():string[]{
        return this.songs;
    }

}
