export class Vote {
    ownerId: string;
    requestId: number;
}

export enum VoteType {
    up = 'up',
    down = 'down'
}