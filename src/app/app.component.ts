import { Component } from '@angular/core';

import {HeaderComponent} from "./header/header.component";
import {AddressListComponent} from "./address-list/address-list.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, AddressListComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'address-book-signals';
}
