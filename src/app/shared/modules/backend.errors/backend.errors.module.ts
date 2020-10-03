import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BackendErrorMessagesComponent } from "./component/backend.errors.component";

@NgModule({
    imports:[CommonModule  ],
    declarations:[BackendErrorMessagesComponent],
    exports:[BackendErrorMessagesComponent]
})
export class BackendErrorsModule {

}