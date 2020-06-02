import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LearningComponent } from './learning/learning.component';


const routes: Routes = [
  {path:"" , redirectTo : "/home", pathMatch:"full"},
  {path:"home" , component : HomeComponent},
  {path:"about" , component : AboutComponent},
  {path:"contact" , component : ContactComponent},
  {path:"learning" , component : LearningComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
