import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutMeComponent } from './Components/about-me/about-me.component'; // Import the AboutComponent
import { HomeComponent } from './Components/home/home.component';
import { ContactComponent } from './Components/contact/contact.component';
import { ProjectsComponent } from './Components/projects/projects.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent,
    HomeComponent,
    ContactComponent,
    ProjectsComponent
     // Remove the HomeComponent from the declarations array
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'about', component: AboutMeComponent },
      { path: 'contact', component: ContactComponent},
      {path: 'projects', component: ProjectsComponent}
      // Add more routes as needed
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }