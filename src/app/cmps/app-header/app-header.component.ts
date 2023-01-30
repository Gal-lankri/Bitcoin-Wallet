import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss'],
})
export class AppHeaderComponent {
  // @Input() toggleMenu = this.toggleMobileMenu;
  showMobileMenu = false;
  toggleMobileMenu() {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
