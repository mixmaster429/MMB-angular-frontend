import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApplicationsSimplifiedService {
  careers$: Observable<any[]>;

  constructor(private http: HttpClient) {
    this.getCareersCacheEnabled();
  }

  /**
   * Get all careers for user's organisation
   */
  getCareers(offset: number, limit: number = 15) {
    const url = `${environment.api.domain}${environment.api.careers.listing}?offset=${offset}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any).results;
      }),
    );
  }

  /**
   * Get all careers for user's organisation
   */
  getCareersCacheEnabled() {
    const url = `${environment.api.domain}${environment.api.careers.listing}`;

    this.careers$ = this.http.get(url).pipe(
      shareReplay(1),
      map((response: HttpResponse<any>): any[] => {
        return (response as any).results;
      }),
    );
  }

  /**
   * Get applications by career
   * @param career id of career
   * @param filter stage 
   * @param isGeneralApplication whether it is general query or not
   */
  getApplicationsByCareerId(careerId: string, filter?: number | number[], isGeneralApplication?: boolean, offset: number = 0, limit: number = 15) {
    let url = `${environment.api.domain}${environment.api.careers.applications}?career=${careerId}&response_type=basic&offset=${offset}&limit=${limit}`;

    if (isGeneralApplication) {
      url = `${url}&general_application=${isGeneralApplication}`;
    } else {
      url = `${url}&stage=${filter}`;
    }

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Get applications by career
   * @param uuid id of career
   * @param offset offset
   * @param limit limit 
   */
  getInterestsByCareerId(uuid: string, offset: number = 0, limit: number = 15) {
    let url = `${environment.api.domain}${environment.api.careers.interestedApplications}?career=${uuid}&offset=${offset}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Get application details
   * @param uuid application uuid
   */
  getApplicationDetails(uuid: string) {
    let url = `${environment.api.domain}${environment.api.careers.applications}${uuid}/?response_type=full`;
    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any);
      })
    );
  }

  /**
   * Get applications marked as interested
   * @param uuid career uuid
   */
  getInterestedApplications(uuid: string, offset: number = 0, limit: number = 15) {
    let url = `${environment.api.domain}${environment.api.careers.interestedApplications}?career=${uuid}&offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Get application details
   * @param uuid application uuid
   */
  getInterestDetails(uuid: string) {
    let url = `${environment.api.domain}${environment.api.careers.interestedApplications}/${uuid}/?response_type=full`;
    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any);
      })
    );
  }

  /**
   * Posts application feedback
   * @param application 
   * @param suitability_profile 
   * @param stage 
   * @param employee 
   * @param feedback_private 
   */
  postFeedback(application: number, suitability_profile: number, stage: number, employee: number, feedback_private?: string,) {
    let url = `${environment.api.domain}${environment.api.careers.feedback}`;
    return this.http.post(url, {
      application,
      feedback_private,
      suitability_profile,
      stage,
      employee
    });
  }

  /**
   * Posts interest feedback
   */
  postInterestFeedback(uuid: string, application: number, suitability_profile: number, stage: number, feedback_private?: string,) {
    let url = `${environment.api.domain}${environment.api.careers.interestFeedback}${uuid}/`;
    return this.http.put(url, {
      application,
      notes_employee: feedback_private,
      suitability_employee: suitability_profile,
      stage,
    });
  }

  /**
   * Send general comment
   * @param uuid record uuid
   * @param career career
   * @param status employee status
   */
  postGeneralComment(uuid: string, career: number, status: string) {
    let url = `${environment.api.domain}${environment.api.careers.applications}${uuid}/`;
    return this.http.put(url,
      {
        career,
        employee_summary: status
      });
  }

  /**
   * Send general comment
   * @param uuid record uuid
   * @param career career
   * @param status employee status
   */
  postGeneralCommentInterestedCandidate(uuid: string, career: number, status: string) {
    let url = `${environment.api.domain}${environment.api.careers.interestFeedback}${uuid}/`;
    return this.http.put(url,
      {
        career,
        notes_employee: status
      });
  }
}
