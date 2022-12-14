import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { PrismaModule } from '../prisma/prisma.module';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { JwtRtStrategy } from './strategy/jwtRefresh.strategy';

@Module({
  providers: [AuthResolver, AuthService, JwtStrategy, JwtRtStrategy],
  imports: [PrismaModule, JwtModule.register({})],
})
export class AuthModule {}
