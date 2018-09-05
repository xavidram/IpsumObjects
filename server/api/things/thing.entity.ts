import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ObjectIdColumn,
} from 'typeorm';

@Entity('things')
export class Thing {

  @ObjectIdColumn()
  id: number | string;
  
  @Column()
  title: string;

  @Column()
  text: string;

  @Column()
  description: string;

  @Column()
  postDate: Date;

  @Column()
  author: string;

}