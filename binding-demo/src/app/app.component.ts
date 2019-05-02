import { Component } from '@angular/core';
import { Button } from 'protractor';
import { callLifecycleHooksChildrenFirst } from '@angular/core/src/view/provider';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'binding-demo';
  rating=2.2;
    starWidth = this.rating*75/5;
    starColor ="blue";
    customerName="Alex";
  performAction(): void{
    alert("Button is click..");
    this.title="binding-demo-in-angular";
    alert(this.starWidth);
    
  }
}
