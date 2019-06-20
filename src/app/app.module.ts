import {BrowserModule, HAMMER_GESTURE_CONFIG, HammerGestureConfig} from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { JumbotronComponent } from './jumbotron/jumbotron.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { CoursesComponent } from './courses/courses.component';
import { FooterComponent } from './footer/footer.component';
import {
  MatButtonModule,
  MatCardModule, MatCheckboxModule, MatChipsModule,
  MatDatepickerModule, MatDialogModule, MatExpansionModule, MatGridListModule, MatIconModule,
  MatInputModule, MatListModule,
  MatMenuModule,
  MatNativeDateModule, MatProgressSpinnerModule, MatRadioModule, MatSelectModule,
  MatSidenavModule, MatSlideToggleModule, MatSnackBarModule, MatStepperModule, MatTabsModule, MatToolbarModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter';
import {LayoutModule} from '@angular/cdk/layout';
import {FileDropModule} from 'ngx-file-drop';
import {BarRatingModule} from 'ngx-bar-rating';
import {StarRatingModule} from 'angular-star-rating';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { FullIntroComponent } from './full-intro/full-intro.component';
import {SidenavComponent} from './sidenav/sidenav.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { CatalogComponent } from './catalog/catalog.component';
import { MyVideosComponent } from './my-videos/my-videos.component';
import { AddVideoComponent } from './add-video/add-video.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    JumbotronComponent,
    IntroductionComponent,
    CoursesComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    FullIntroComponent,
    SidenavComponent,
    AddCourseComponent,
    CatalogComponent,
    MyVideosComponent,
    AddVideoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatMenuModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    MatIconModule,
    HttpClientModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatCheckboxModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatStepperModule,
    LayoutModule,
    MatTabsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    FileDropModule,
    NgbModule,
    StarRatingModule.forRoot(),
    BarRatingModule,
    MatCardModule,
    MatChipsModule,
    MatRadioModule,
    MatDialogModule,
    MatExpansionModule
  ],
  providers: [{ provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS, useValue: { useUtc: true }  }, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: HammerGestureConfig
  }
  ],
  bootstrap: [AppComponent],
  entryComponents: [LoginComponent, RegisterComponent]
})
export class AppModule { }
