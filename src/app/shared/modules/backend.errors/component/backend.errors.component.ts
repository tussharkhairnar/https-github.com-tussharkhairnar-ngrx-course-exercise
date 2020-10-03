import { Component, Input, OnInit } from '@angular/core';
import { BackendErrorInterface } from 'src/app/shared/types/backendErrors.interface';
@Component({
    selector: 'app-backend-error-messages',
    templateUrl: './backend.errors.component.html',
    styleUrls: ['./backend.errors.component.css'],
})
export class BackendErrorMessagesComponent implements OnInit {
    @Input('backendErrors') backendErrorsProps: BackendErrorInterface;
    errorMessages: string[] = []
    constructor() {

    }

    ngOnInit() {
        this.errorMessages = Object.keys(this.backendErrorsProps).map(
            (name: string) => {
                const messages = this.backendErrorsProps[name].join(' ')
                return `${name} ${messages}`
            }
        )

    }
}