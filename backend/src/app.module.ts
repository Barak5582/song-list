import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongsController } from './song.controller';
import { Song } from './song.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db',
      port: 5432,
      username: 'postgres',
      password: 'root',
      database: 'postgres',
      entities: [Song],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Song]),
  ],
  controllers: [SongsController],
})
export class AppModule {}
