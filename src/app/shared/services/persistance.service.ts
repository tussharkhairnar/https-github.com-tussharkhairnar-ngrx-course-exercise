import { Injectable } from '@angular/core';
import { CommonModule } from '@angular/common'

@Injectable()
export class PersistanceService {

    set(key: string, value: any): void {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) {
            console.log("Error saving to local storage");
        }
    }

    get(key: string): any {
        try {
            return JSON.parse(localStorage.getItem(key))
        } catch (e) {
            console.log('Error getting data from local storage', e);
            return null
        }
    }
}
