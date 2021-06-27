import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export enum NavbarType {
    LIGHT = 'light',
    TRANSPARENT = 'transparent'
}

@Injectable({
    providedIn: 'root',
})
export class NavbarService {
    navbarType: BehaviorSubject<NavbarType> = new BehaviorSubject<NavbarType>(NavbarType.LIGHT);
    isUserLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

    constructor() { }

    /**
     * Sets navbar style
     * @param type Type of navbar to show
     */
    setNavbarType(type: NavbarType) {
        this.navbarType.next(type);
    }

    /**
     * User log in state
     * @param value boolean flag indicating whether user is logged in
     */
    setUserLoggedInState(value: boolean) {
        this.isUserLoggedIn.next(value);
    }
}