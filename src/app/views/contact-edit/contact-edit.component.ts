import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss'],
})
export class ContactEditComponent implements OnInit {
  constructor(
    private contactService: ContactService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  contact!: Contact;
  contacts$!: Observable<Contact[]>;
  ngOnInit(): void {
    // this.route.data.subscribe()

    this.route.data.subscribe(({ contact }) => {
      this.contact = contact || new Contact();
    });
  }

  async onSaveContact(form: NgForm) {
    const contactId = this.contact._id;
    await lastValueFrom(
      this.contactService.saveContact({ ...form.value, _id: contactId })
    );
    this.contactService.loadContacts();
    this.contacts$ = this.contactService.contacts$;
    console.log(this.contacts$);

    this.router.navigateByUrl('/contact');
  }
}
