import { Injectable } from '@angular/core';
import { Status } from '../apply.component';

@Injectable({
    providedIn: 'root',
})
export class QuestionsStepService {
    status: Status;
    constructor() { }

    getStepStatus(): Status {
        return this.status;
    }
}