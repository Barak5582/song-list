import { Controller, Get } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';

@Controller('api')
export class SongsController {
  constructor(
    @InjectRepository(Song)
    private readonly songRepository: Repository<Song>,
  ) {}

  @Get('songs')
  async getSongs(): Promise<Song[]> {
    return this.songRepository.find({ order: { band: 'ASC' } });
  }
}
