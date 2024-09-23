import { CourseEntity } from 'src/entities/course.entity';
import { UserEntity } from 'src/entities/user.entity';
import { Repository } from 'typeorm';
export declare class CourseService {
    private readonly courseRepository;
    private readonly userRepository;
    constructor(courseRepository: Repository<CourseEntity>, userRepository: Repository<UserEntity>);
    getAll(): Promise<CourseEntity[]>;
}
