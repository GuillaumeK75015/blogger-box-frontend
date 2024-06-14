import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostOverviewComponent } from './components/post-overview/post-overview.component';
import { PostNewFormComponent } from './components/post-new-form/post-new-form.component';

const routes: Routes = [
  { path: 'home', component: PostOverviewComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'add-post', component: PostNewFormComponent    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
