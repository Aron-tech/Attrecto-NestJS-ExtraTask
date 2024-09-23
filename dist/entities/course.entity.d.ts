import { UserEntity } from './user.entity';
export declare class CourseEntity {
    id: number;
    title: string;
    author: UserEntity;
    description: string;
    url: string;
    createdAt: Date;
    updatedAt: Date;
}
