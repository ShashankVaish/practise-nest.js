import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
@Injectable()
export class AuthService {
    constructor(prisma : PrismaService) {}
    signin(){
        return "signin";

    }
    signup(){
        return "signup";
    }
}
