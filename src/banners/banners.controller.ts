import { Controller, Get } from '@nestjs/common';
import { BannersService } from './banners.service';
import { Banner } from './entities/banner.entity';

@Controller('banners')
export class BannersController {
  constructor(private readonly bannersService: BannersService) {}

  @Get()
  async findAll(): Promise<Banner[]> {
    return this.bannersService.findAllBanners();
  }
}
