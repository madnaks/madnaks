import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { HeaderComponent } from './core/header/header.component';
import { CvComponent } from './cv/cv.component';
import { FourOhFourComponent } from './core/four-oh-four/four-oh-four.component';
import { FooterComponent } from './core/footer/footer.component';
import { ExperienceComponent } from './cv/experience/experience.component';
import { FormationComponent } from './cv/formation/formation.component';
import { TraineeshipComponent } from './cv/traineeship/traineeship.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactMeComponent,
    HeaderComponent,
    CvComponent,
    FourOhFourComponent,
    FooterComponent,
    ExperienceComponent,
    FormationComponent,
    TraineeshipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
