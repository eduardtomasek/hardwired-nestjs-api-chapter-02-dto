import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZodiacSignsModule } from './zodiac-signs/zodiac-signs.module';

@Module({
  imports: [ZodiacSignsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
