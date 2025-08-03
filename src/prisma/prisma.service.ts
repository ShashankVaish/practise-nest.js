import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { extname } from 'path';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({
            datasources:{
                db:{url:"postgresql://shashank_vaish:123@localhost:5432/nestdb",}
            }
            
        })
    }

}
