/**
 * Skill main object
 */
export class Skill {
    skill: {
        name: string;
    };
    uuid: string;
    name: string;
}


/**
 * Skill View Model - support for backend interaction
 */
export class SkillViewModel {
    skill?: number;
    skill_custom?: string;
    name?: string;
    id?: number;
}
