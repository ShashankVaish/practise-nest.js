import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AuthDto } from './dto';
import * as argon2 from 'argon2';
import { PrismaClientKnownRequestError } from 'generated/prisma/runtime/library';
@Injectable()
export class AuthService {
    constructor( private readonly prisma : PrismaService) {}
    signin(){
        return "signin";

    }
    async signup(dto:AuthDto){
        //password is convert into hash 
        try {
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
            
        }catch (error) {
            if( error instanceof PrismaClientKnownRequestError ) {
                if( error.code === 'P2002' ) {
                    // unique constraint failed
                    throw new Error('User credentials already taken');
                }
                
            }
            throw new Error('Something went wrong');
        }
    }   
        
}
