import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { GalleryModule } from '@ngx-gallery/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { WorkComponent } from './work/work.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { QouteComponent } from './qoute/qoute.component';
import { SolutionComponent } from './solution/solution.component';
import { ActionComponent } from './action/action.component';
import { MilestoneComponent } from './milestone/milestone.component';
import { ClientComponent } from './client/client.component';
import { PricingComponent } from './pricing/pricing.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
    NavComponent,
    WorkComponent,
    ContactComponent,
    TeamComponent,
    QouteComponent,
    SolutionComponent,
    ActionComponent,
    MilestoneComponent,
    ClientComponent,
    PricingComponent,
    GalleryComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgbModule,
    ScrollToModule.forRoot(),
    GalleryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
