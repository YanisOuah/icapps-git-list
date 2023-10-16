import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubListComponent } from './features/github-list/github-list.component';
import { GithubDetailComponent } from './features/github-detail/github-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubListComponent,
    GithubDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
