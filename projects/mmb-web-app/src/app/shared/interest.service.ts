import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InterestService {

  constructor(private http: HttpClient) { }

  sendInterest(query: any) {
    let url: string;
    if (query.career || query.career_slug) {
      url = `${environment.domain}${environment.api.interest.career}`;
    }

    if (query.event || query.event_slug || query.event_type) {
      url = `${environment.domain}${environment.api.interest.event}`;
    }

    if (query.initiative || query.initiative_slug) {
      url = `${environment.domain}${environment.api.interest.initiative}`;
    }

    if (query.opportunity || query.opportunity_slug) {
      url = `${environment.domain}${environment.api.interest.opportunity}`;
    }
    return this.http.post(url,
      [{
        user: query.user,
        email: query.email,
        username: query.username,
        uuid_of_notification: query.uuid_of_notification,
        career: query.career,
        career_slug: query.career_slug,
        event: query.event,
        event_slug: query.event_slug,
        initaitve: query.initiative,
        initiative_slug: query.initiative_slug,
        opportunity: query.opportunity,
        opportunity_slug: query.opportunity_slug,
        source: query.source,
        source_slug: query.source_slug,
        event_type: query.event_type
      }]);
  }
}
