import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { ResumePopupComponent } from './resume-popup/resume-popup.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatSelectModule} from "@angular/material/select";
import { MatInputModule} from "@angular/material/input";


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    ResumePopupComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
