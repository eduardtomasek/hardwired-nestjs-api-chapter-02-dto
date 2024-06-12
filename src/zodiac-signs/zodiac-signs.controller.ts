import { Controller, Get } from '@nestjs/common';
import { ZodiacSignsService } from './zodiac-signs.service';

@Controller('zodiac-signs')
export class ZodiacSignsController {
  constructor(private readonly zodiacSignsService: ZodiacSignsService) {}

  @Get()
  findAll() {
    return this.zodiacSignsService.findAll();
  }
}
