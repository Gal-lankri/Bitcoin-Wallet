import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { ContactIndexComponent } from './views/contact-index/contact-index.component';
import { ContactDetailsComponent } from './views/contact-details/contact-details.component';
import { ContactEditComponent } from './views/contact-edit/contact-edit.component';
import { ContactResolver } from './services/contact.resolver';
import { SignupComponent } from './views/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'contact',
    canActivate:[AuthGuard],
    component: ContactIndexComponent,
    children: [
      { path: 'edit/:id', component: ContactEditComponent, resolve: {contact: ContactResolver} },
      { path: 'edit', component: ContactEditComponent },
    ],
  },
  {
    path: 'contact/:id',
    component: ContactDetailsComponent,
    resolve: {contact: ContactResolver},
    // canActivate: [AuthGuard],
  },
  { path: '',canActivate:[AuthGuard], component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
