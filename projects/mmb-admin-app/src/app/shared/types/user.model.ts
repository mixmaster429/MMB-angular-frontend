import { Project } from './project.model';

export class User {
    id: number;
    _id: number;
    username: string;
    user_pic_temp_url: string;
    image_profile: string;
    full_name: string;
    first_name: string;
    last_name: string;
    professional_title: string;
    current_country: string;
    current_city: string;
    career: Experience[] = [];
    education: Education[] = []; 
    projects: Project[];
    
    details: PersonalDetails = new PersonalDetails();
    languages: string;
    _source: {
        full_name: string;
    };

    //extra props for ui
    isChecked: boolean;
    _newScore: number;
    _newNotes: string;
}

export class PersonalDetails { 
    coverImage: string;
    image: string;
    name: string;
    phone: string;
    email: string;
    company: string;
    professionalTitle: string;
    location: string;
}

export class Experience {
    logo: string;
    location: string;
    summary: string;

    title: string;
    company: string;
    start_date: Date;
    end_date: Date;
}

export class Education {
    logo: string;
    courseTitle: string;
    location: string;
    summary: string;

    degree: string;
    institute: string;
    start_date: Date;
    end_date: Date;
}