import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubListComponent } from './features/github-list/github-list.component';
import { GithubDetailComponent } from './features/github-detail/github-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ProjectCardComponent } from './shared/components/project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubListComponent,
    GithubDetailComponent,
    SearchBarComponent,
    ProjectCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
