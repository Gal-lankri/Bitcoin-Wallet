import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss'],
})
export class MobileMenuComponent {
  @Output() toggleMenu = new EventEmitter<any>();

  toggleMobileMenu() {
    console.log('hi');
    
    this.toggleMenu.emit()
  }
}
