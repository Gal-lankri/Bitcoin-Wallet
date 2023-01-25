import { Component, Input } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss'],
})
export class TransferFundComponent {
  constructor(private userService: UserService) {}
  @Input() contact!: Contact;
  amount!: number;
  onTransfer() {
    if (!this.amount) return;
    this.userService.addMove(this.contact, this.amount);
    this.amount = 0;
  }
}
