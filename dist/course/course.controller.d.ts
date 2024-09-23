import { CourseService } from './course.service';
export declare class CourseController {
    private readonly courseService;
    constructor(courseService: CourseService);
    findAll(): Promise<import("../entities/course.entity").CourseEntity[]>;
}
