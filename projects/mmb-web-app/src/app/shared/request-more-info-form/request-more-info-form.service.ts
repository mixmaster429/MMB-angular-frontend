import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestMoreInfoFormService {

  constructor(private http: HttpClient) { }

  /**
   * Sends form data to the API
   */
  sendFormData = (newInfoRequest) => {
   const url = `${environment.domain}${environment.api.companiesForm}`;
   return this.http.post(url, newInfoRequest);
}

}
