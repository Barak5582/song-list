import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Song {
  @Column()
  songName: string;

  @Column()
  band: string;

  @Column()
  year: number;
}
