import { Module } from '@nestjs/common';
import { ZodiacSignsService } from './zodiac-signs.service';
import { ZodiacSignsController } from './zodiac-signs.controller';

@Module({
  controllers: [ZodiacSignsController],
  providers: [ZodiacSignsService],
})
export class ZodiacSignsModule {}
