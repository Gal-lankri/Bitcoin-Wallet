import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Subscription, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { Move } from 'src/app/models/move.model';
import { User } from 'src/app/models/user.model';
import { ContactService } from 'src/app/services/contact.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss'],
})
export class ContactDetailsComponent implements OnInit, OnDestroy {
  constructor(
    private contactService: ContactService,
    private userService: UserService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  contact!: Contact;
  userMoves!: object[];
  subscription!: Subscription;

  async ngOnInit(): Promise<void> {
    this.subscription = this.route.data.subscribe(
      (data) => (this.contact = data['contact'])
    );
    this.userService.getUser();
    this.userService
      .getUserMoves()
      .subscribe((moves) => (this.userMoves = moves));
  }

  get getContactImageUrl() {
    return `https://robohash.org/${this.contact._id}?set=set5`;
  }

  onBack() {
    this.router.navigateByUrl('/contact');
  }

  getContactTransfer() {
    return this.userMoves.filter(
      (move: any) => move.toId === this.contact._id
    );
  }

  ngOnDestroy(): void {
    this, this.subscription.unsubscribe();
  }
}
