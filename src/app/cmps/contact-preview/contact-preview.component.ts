import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from 'src/app/models/contact.model';

@Component({
  selector: 'contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss'],
})
export class ContactPreviewComponent {
  @Input() contact!: Contact;
  @Output() onRemove = new EventEmitter<string>();
  constructor(private router: Router) {}
  get getContactImageUrl() {
    return `url(https://robohash.org/${this.contact._id}?set=set5)`;
  }

  onRemoveContact(ev: MouseEvent) {
    ev.stopPropagation();
    if (
      confirm(
        `Are you sure that you want to delete ${this.contact.name} from your contact list ?`
      )
    ) {
      this.onRemove.emit(this.contact._id);
    } else return;
  }
  onEdit(ev: MouseEvent) {
    ev.stopPropagation();
    this.router.navigate(['/contact/edit', this.contact._id]);
  }
}
