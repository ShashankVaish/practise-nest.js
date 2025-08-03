import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';
@Injectable()
export class AuthService {
    constructor( private readonly prisma : PrismaService) {}
    signin(){
        return "signin";

    }
    async signup(dto:AuthDto){
        //password is convert into hash 
        const hash = await argon2.hash(dto.password);
        // save user to db
        const user = await this.prisma.user.create({
            data:{
                email: dto.email,
                hash,
            }
        })
        // return user
        // delete user.hash; // remove password hash from the response
        return user;
    }   
        
}
