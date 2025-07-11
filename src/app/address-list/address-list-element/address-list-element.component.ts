import {Component, effect, inject, input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddressEntry} from "../address-entry";
import {NotificationService} from "../notification.service";

@Component({
  selector: 'app-address-list-element',
  imports: [CommonModule],
  templateUrl: './address-list-element.component.html',
  standalone: true,
  styleUrls: ['./address-list-element.component.css']
})
export class AddressListElementComponent {
  address = input<AddressEntry>();
  selected = false;
  notificationService = inject(NotificationService);

  constructor() {
    effect(() => {
      this.selected = this.notificationService.selectedElement() === this.address();
    })
  }

  getFullName(): string {
    return `${this.address()?.firstName}, ${this.address()?.lastName}`;
  }
}
