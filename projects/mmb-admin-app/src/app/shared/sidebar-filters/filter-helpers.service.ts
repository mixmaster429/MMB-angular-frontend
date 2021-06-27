import { Injectable } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Injectable({
    providedIn: 'root'
})
export class FilterHelpersService {
    constructor() { }

    /**
     * Adds item to the list
     * @param event MatChipInputEvent
     * @param type type of data
     */
    addToChipList(event: MatChipInputEvent, item: string[]): void {
        const input = event.input;
        const value = event.value;

        // Add our item
        if ((value || '').trim()) {
            item.push(value.trim());
        }

        // Reset the input value
        if (input) {
            input.value = '';
        }
    }

    /**
     * Removes item from chip list
     * @param value value to be removed
     * @param item array from which value is to be removed
     */
    removeFromChipList(value: string, item: string[]): void {
        const index = item.indexOf(value);

        if (index >= 0) {
            item.splice(index, 1);
        }
    }
}
