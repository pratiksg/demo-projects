import { Component } from '@angular/core';
import { Customer,Address } from './customer';


@Component({
templateUrl:"./customer-login.component.html",
selector:"customer-login"

})
export class CustomerLoginComponent{
    customer:Customer;
    ngOnInit(){
        this.customer=new Customer();
        this.customer.address= new Address();

    }

}