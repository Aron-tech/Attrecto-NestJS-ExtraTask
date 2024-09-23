import { CourseEntity } from './course.entity';
export declare class UserEntity {
    id: number;
    email: string;
    lastName: string;
    firstName: string;
    password: string;
    courses: CourseEntity[];
}
