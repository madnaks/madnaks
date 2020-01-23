import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CvComponent } from './cv/cv.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'home', component: HomeComponent },
  { path:'contact-me', component : ContactMeComponent},
  { path:'cv',component : CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
