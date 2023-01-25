import { Component, Input } from '@angular/core';
import { Move } from 'src/app/models/move.model';

@Component({
  selector: 'moves-list',
  templateUrl: './moves-list.component.html',
  styleUrls: ['./moves-list.component.scss']
})
export class MovesListComponent {
@Input() moves!: any | null

}
