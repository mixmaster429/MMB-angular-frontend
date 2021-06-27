/**
 * Overview - maps project candidate with relevance and notes
 */
export class ProjectCandidateOverview {
    candidate: ProjectCandidate;
    relevance: number;
    notes: string;
}

/**
 * Project candidate model
 */
export class ProjectCandidate {
    uuid: string;
    id: number;
    first_name: string;
    last_name: string;
    email: string;
}