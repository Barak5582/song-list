import { Controller, Get, InternalServerErrorException } from '@nestjs/common';
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
    try {
      return this.songRepository.find({ order: { band: 'ASC' } });
    } catch (error) {
      console.error('Error fetching songs:', error);
      throw new InternalServerErrorException('An error occurred while fetching songs.');
    }
  }
}
