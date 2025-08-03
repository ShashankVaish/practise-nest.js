import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';

import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  // imports: [PrismaService], // Add any necessary modules here
  controllers: [AuthController],
  providers: [AuthService, PrismaService],
  exports: [AuthService], // Export AuthService if needed in other modules
})
export class AuthModule {}
