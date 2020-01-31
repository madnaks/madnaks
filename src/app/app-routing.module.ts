import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { CvComponent } from './cv/cv.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path:'home', component: HomeComponent },
  { path:'contact-me', component : ContactMeComponent},
  { path:'cv',component : CvComponent},
  { path:'not-found', component: FourOhFourComponent},
  { path:'**', redirectTo: 'not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
