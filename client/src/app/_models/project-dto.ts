interface ProjectComment {
    // Define properties for ProjectComment
}

interface ProjectUser {
    // Define properties for ProjectUser
}

interface ProjectPhoto {
    // Define properties for ProjectPhoto
}

export class ProjectDto {
    projectName!: string;
    id!: number;
    created!: Date;
    introduction!: string;
    code!: string;
    status!: string;
    tech!: string;
    difficulty!: string;
    timeForCompletion!: string;
    category!: string;
    tags!: string;
    documentation: string[] = [];
    includes: string[] = [];
    goal!: string;
    views!: number;
    likes!: number;
    comments: ProjectComment[] = [];
    contributors: ProjectUser[] = [];
    photos: ProjectPhoto[] = [];
    photo!: ProjectPhoto;
}