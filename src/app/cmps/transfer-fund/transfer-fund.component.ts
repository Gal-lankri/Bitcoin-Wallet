import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
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
  amount!: number | null;
  onTransfer(form: NgForm) {
    if (!this.amount) return;
    this.userService.addMove(this.contact, form.value.amount);
    this.amount = null;
  }
}
