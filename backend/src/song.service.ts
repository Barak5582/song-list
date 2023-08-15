import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from './song.entity';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';

@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,
    @InjectEntityManager()
    private entityManager: EntityManager,
  ) {}

 
  async getAllSongs(): Promise<Song[]> {
    return this.songRepository.find({ order: { band: 'ASC' } });
  }
}
