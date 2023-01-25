import { Component, OnDestroy, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { Contact } from 'src/app/models/contact.model';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-index',
  templateUrl: './contact-index.component.html',
  styleUrls: ['./contact-index.component.scss']
})
export class ContactIndexComponent implements OnInit, OnDestroy {
constructor(
  private contactService: ContactService
){}

contacts!: Contact[]
contacts$!: Observable<Contact[]>

subscription!: Subscription
onRemoveContact(contactId:string):void{
  this.contactService.deleteContact(contactId)

}
ngOnInit(): void {
 this.contactService.loadContacts()
 this.contacts$ = this.contactService.contacts$
}

ngOnDestroy(): void {
  
}
}
