import { NgModule } from '@angular/core';
import{BrowserModule} from '@angular/platform-browser';
import { CustomerLoginComponent } from './customer-login.components';
import { CustomerRegistrationComponent } from './customer-registration.component';
import { customerRoutes } from './customer.routes';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CustomerService } from './customer.service';



@NgModule({
    declarations:
    [
        CustomerLoginComponent,
        CustomerRegistrationComponent
    ],
    imports:
    [
        BrowserModule,
        RouterModule.forChild(customerRoutes),
        FormsModule,
        HttpClientModule
        
    ],
    exports:
    [CustomerLoginComponent,
        CustomerRegistrationComponent,
        RouterModule
    ],
    providers:[
        CustomerService
    ]
})
export class CustomerModule{

}

