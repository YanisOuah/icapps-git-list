import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectListComponent } from './features/project-list/project-list.component';
import { ProjectDetailComponent } from './features/project-detail/project-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';
import { ProjectDetailCardComponent } from './shared/components/project-detail-card/project-detail-card.component';

export const imports = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  FormsModule,
  AngularSvgIconModule.forRoot(),
];

@NgModule({
  declarations: [
    AppComponent,
    ProjectListComponent,
    ProjectDetailComponent,
    SearchBarComponent,
    ProjectCardComponent,
    ProjectDetailCardComponent,
  ],
  imports: [imports],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
