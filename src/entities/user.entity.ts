import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CourseEntity } from './course.entity';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  email: string;
  @Column()
  lastName: string;
  @Column()
  firstName: string;

  @Column()
  password: string;

  @OneToMany(() => CourseEntity, (course) => course.author)
  courses: CourseEntity[];
}
