import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CourseComponent } from './course/course.component'
import { HomeComponent } from './home/home/home.component'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register/register.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'course', component: CourseComponent},
  {path:'login', component: LoginComponent},
  {path:'register', component: RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
