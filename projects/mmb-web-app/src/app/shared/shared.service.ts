import { Skill } from './../profile/types/helpers/skill.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Country } from './types/country.model';
import { environment } from '../../../src/environments/environment';
import { PrimaryFunction } from './types/primary-function.model';
import { Filter } from './types/filter.model';
import { Language } from './types/language.model';
import { USER_ROLE_OPTIONS } from './types/user-roles.const';
import { AppPermission } from './types/app-permissions.model';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  COUNTRIES_DEFAULT_LIMIT = 10;
  // TODO: Replace this with behavior subject to keep latest value of role from api
  currentUserRole = USER_ROLE_OPTIONS.anonymous;
  userPermissions$: BehaviorSubject<AppPermission> = new BehaviorSubject<AppPermission>(new AppPermission());

  constructor(private http: HttpClient) {
    this.getUserRolesConfiguration();
  }

  /**
  * Gets countries
  * @param searchString 
  * @param limit 
  */
  getCountries(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Country[]> {
    const url = `${environment.domain}${environment.api.public.country}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  /**
  * Gets region
  * @param searchString 
  * @param limit 
  */
  getRegions(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT) {
    const url = `${environment.domain}${environment.api.public.region}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  /**
  * Gets industries
  * @param searchString 
  * @param limit 
  */
  getSecondaryIndustries(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT) {
    const url = `${environment.domain}${environment.api.public.secondaryIndustries}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  getOrgs(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Country[]> {
    const url = `${environment.domain}${environment.api.public.organisation}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  getSchools(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Country[]> {
    const url = `${environment.domain}${environment.api.public.organisation}?category=educational&name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  getSkills(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Skill[]> {
    const url = `${environment.domain}${environment.api.public.skills}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Skill[] => {
        return (response as any).results;
      })
    );
  }

  getLanguages(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Language[]> {
    const url = `${environment.domain}${environment.api.public.languages}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Language[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Gets functions
   * @param searchString 
   * @param limit 
   */
  getPrimaryFunctions(searchString: string = '', limit: number = 500): Observable<PrimaryFunction[]> {
    const url = `${environment.domain}${environment.api.public.primaryFunctions}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): PrimaryFunction[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Gets industries
   * @param searchString 
   * @param limit 
   */
  getPrimaryIndustries(searchString: string = '', limit: number = 500): Observable<PrimaryFunction[]> {
    const url = `${environment.domain}${environment.api.public.primaryIndustries}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): PrimaryFunction[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Gets user roles configuration
   */
  getUserRolesConfiguration() {
    const url = `/assets/data/roles-configuration.json`;

    this.http.get(url).pipe(
      map((response: HttpResponse<any>): any[] => {
        return (response as any).roles;
      })
    ).subscribe((response: any[]) => {
      this.userPermissions$.next(response.find((item) => item.role === this.currentUserRole.key));
    });
  }

  /**
   * Gets currencies
   * @param searchString search string
   * @param limit page size
   */
  getCurrencies(searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT): Observable<Country[]> {
    const url = `${environment.domain}${environment.api.public.currency}?name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Gets cities of a country
   */
  getCitiesByCountry(countryId: number, searchString: string = '', limit: number = this.COUNTRIES_DEFAULT_LIMIT) {
    const url = `${environment.domain}${environment.api.public.city}?country=${countryId}&name=${searchString}&limit=${limit}`;

    return this.http.get(url).pipe(
      map((response: HttpResponse<any>): Country[] => {
        return (response as any).results;
      })
    );
  }

  /**
   * Applies filter to url
   * @param url 
   * @param filter 
   */
  applyFilterToUrl(url, filter: Filter) {
    if (filter) {
      if (filter.keyword) {
        url = `${url}&headline=${filter.keyword}`;
      }
      if (filter.country) {
        url = `${url}&countries=${filter.country}`;
      }
      if (filter.function) {
        url = `${url}&functions=${filter.function}`;
      }
      if (filter.industry) {
        url = `${url}&industries=${filter.industry}`;
      }
      if (filter.careerType) {
        url = `${url}&career_type=${filter.careerType}`;
      }
      if (filter.eventType) {
        url = `${url}&event_type=${filter.eventType}`;
      }
      if (filter.initiativeType) {
        url = `${url}&initiative_type=${filter.initiativeType}`;
      }
    }
    return url;
  }

  /**
   * User wants to follow user
   */
  followUser(id: number) {
    const data = {
      user: id
    };
    const url = `${environment.domain}${environment.api.user.followUser}`;
    return this.http.post(url, data).pipe(
      map((response: HttpResponse<any>) => {
        return (<any>response);
      })
    );
  }

  /**
   * User wants to unfollow user
   */
  unfollowUser(uuid: string) {
    const url = `${environment.domain}${environment.api.user.followUser}${uuid}`;
    return this.http.delete(url).pipe(
      map((response: HttpResponse<any>) => {
        return (<any>response);
      })
    );
  }

  /**
   * Gets time left
   * @param endDate end date
   */
  getTimeLeft(endDate: string): number {
    const end: any = moment(endDate);
    const today: any = moment(new Date());
    return end.diff(today, 'days');
  }

  /**
 * Get location
 * @param {string} country
 * @param {string} city
 * @param {string} cityCustom
 */
  getLocation(country: string, city: string, cityCustom: string): string {
    let location: string = city;
    if (!city && cityCustom) {
      location = cityCustom;
    }

    if (country) {
      // country exists
      return location ? `${location}, ${country}` : country;
    } else if (location) {
      // city/city_custom only
      return location;
    }

    // placeholder value
    return 'Location not provided';
  }
}
