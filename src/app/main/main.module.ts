import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { GalleryModule } from '@ngx-gallery/core';

import { SharedModule } from '../shared/shared.module';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FooterComponent } from './footer/footer.component';
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
    MainComponent,
    HomeComponent,
    AboutComponent,
    FooterComponent,
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
    GalleryModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [MainComponent]
})
export class MainModule { }
