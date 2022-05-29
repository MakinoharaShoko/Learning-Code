import { Module } from '@nestjs/common';
import { TestguardController } from './testguard.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule],
  controllers: [TestguardController],
})
export class TestguardModule {}
