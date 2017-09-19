import { NgsRevealModule } from 'ng-scrollreveal';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { NavComponent } from './nav/nav.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { MainComponent } from './main/main.component';
import { AdaptiveComponent } from './adaptive/adaptive.component';
import { AdaptivePictureComponent } from './adaptive/adaptive-picture/adaptive-picture.component';
import { FooterComponent } from './footer/footer.component';
import { BodyadaptiveComponent } from './adaptive/bodyadaptive/bodyadaptive.component';

const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'adaptiveaid', component: AdaptiveComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    MainComponent,
    AdaptiveComponent,
    AdaptivePictureComponent,
    FooterComponent,
    BodyadaptiveComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgsRevealModule.forRoot(),
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
