import { Injectable } from '@angular/core';
import { Status } from '../apply.component';
import { environment } from 'projects/mmb-web-app/src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../../types/user-profile.model';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root',
})
export class PersonalInfoStepService {
    status: Status;

    constructor(private http: HttpClient) { }

    getStepStatus(): Status {
        return this.status;
    }
}