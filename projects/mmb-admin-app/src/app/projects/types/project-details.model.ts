import { User } from '../../shared/types/user.model';
import { Project } from '../../shared/types/project.model';

export class ProjectDetails {
    id: number;
    project: Project;
    'users-details': User;
}