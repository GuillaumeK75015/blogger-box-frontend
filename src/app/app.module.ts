import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderBarComponent } from './components/header-bar/header-bar.component';
import { PostOverviewComponent } from './components/post-overview/post-overview.component';
import { PostListEntryComponent } from './components/post-list-entry/post-list-entry.component';
import { PostNewFormComponent } from './components/post-new-form/post-new-form.component';

import { PostService } from './service/post.service';
import { CategoryService } from './service/category.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderBarComponent,
    PostOverviewComponent,
    PostListEntryComponent,
    PostNewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    PostService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
