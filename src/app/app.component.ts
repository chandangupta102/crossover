import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material';

@Component({
  selector   : 'app-root',
  templateUrl: './app.component.html',
  styleUrls  : [ './app.component.scss' ]
})
export class AppComponent {
 @ViewChild('filterSlide') filterSlide: MatSidenav;
 //open = false;
//  open() {
//    return true;
//  }
}
