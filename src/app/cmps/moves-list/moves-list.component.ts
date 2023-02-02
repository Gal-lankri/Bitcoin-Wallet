import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss'],
})
export class MovesListComponent {
  @Input() moves!: any | null;
  @Input() contact!: Contact | null;
}
