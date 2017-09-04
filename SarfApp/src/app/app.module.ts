import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe, PipeTransform } from '@angular/core';
import { CommonModule, APP_BASE_HREF, LocationStrategy, HashLocationStrategy} from '@angular/common';
// Components
import { AppComponent } from './app.component';
import { SarfQuiz } from '../Pages/SarfQuiz/SarfQuiz';
import { Panel } from '../SharedComponents/panel';
import { HomePageComponent } from '../Pages/HomePage/HomePageComponent';
import { MaziPageComponent } from "../Pages/Mazi/MaziPageComponent";
// modules
import { FormsModule } from '@angular/forms';
import { RouterModule,Router, Routes } from '@angular/router';
import {
  MdSidenavModule, MdButtonModule,MdListModule,
  MdSelectModule, MdCardModule, MdMenuModule,
  MdToolbarModule, MdIconModule,MdRadioModule,MdTableModule
} from '@angular/material';
//Filters
import { QuizFilter } from '../Filters/RandomQuizPipeFilter';
import { SegaFilter } from "../Filters/SegaFilter";
import { SegaTypeFilter } from "../Filters/SegaTypeFilter";
import { BaabFilter } from "../Filters/BaabFilter";
//Services
import { Gardanen } from '../Services/Gardanen.service';
import { Quiz } from '../Services/Quiz.service';
import { Global } from '../Services/Global.service';
import { ApiCallService } from '../Services/ApiCall.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';


// const appRoutes: Routes = [
//   {
//     path: 'heroes',
//     component: HeroListComponent,
//     data: { title: 'Heroes List' }
//   },
//   { path: '**', component: PageNotFoundComponent }
// ];

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'mazi', component: MaziPageComponent }
];

@NgModule({
  declarations: [
    QuizFilter,
    SegaFilter,
    SegaTypeFilter,
    BaabFilter,
    AppComponent,
    SarfQuiz,
    Panel,
    HomePageComponent,
    MaziPageComponent
  ],
  exports: [QuizFilter],
  imports: [BrowserModule,
    RouterModule.forRoot([ 
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomePageComponent }, //HERE ID IS A ROUTE PARAMETER.
        { path: 'mazi', component: MaziPageComponent },
        { path: '**', redirectTo: 'home' }
    ]),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MdSidenavModule,
    MdListModule,
    MdButtonModule,
    MdRadioModule,
    MdMenuModule,
    MdCardModule,
    MdToolbarModule,
    MdIconModule,
    MdSelectModule,
    MdTableModule
  ],
  providers: [{ provide: APP_BASE_HREF, useValue: '/' },
  { provide: LocationStrategy, useClass: HashLocationStrategy },ApiCallService, Global, SarfQuiz, Quiz, Gardanen],
  bootstrap: [AppComponent]
})
export class AppModule { }
