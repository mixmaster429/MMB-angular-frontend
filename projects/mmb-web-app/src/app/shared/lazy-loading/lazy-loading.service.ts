import { Injectable } from '@angular/core';
import { forkJoin, of, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
/**
 * Lazy loading service
 * 
 * Loads data in buffer and concatenates with original observable
 */
export class LazyLoadingService {
    constructor() { }

    addBufferValues(original: Observable<any>, buffer: Observable<any>, offset: BehaviorSubject<number>) {
        if (offset.value > 0 && original && buffer) {
            // Join the streams - current and buffer
            return forkJoin(original, buffer).pipe(
                // combine arrays
                map(([s1, s2]) => [...s1, ...s2]),
            )
        } else {
            return of();
        }
    }
}