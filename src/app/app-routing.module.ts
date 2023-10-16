import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GithubListComponent } from './features/github-list/github-list.component';
import { GithubDetailComponent } from './features/github-detail/github-detail.component';

const routes: Routes = [
  { path: '', component: GithubListComponent },
  { path: 'detail', component: GithubDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
