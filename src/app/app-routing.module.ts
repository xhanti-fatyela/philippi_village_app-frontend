import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProgramsComponent } from './programs/programs.component';
import { AboutComponent } from './about/about.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { DetailsComponent } from './details/details.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';






const routes: Routes = [
  { path: '', redirectTo:'home', pathMatch: 'full' },
  { path: 'home', component: LandingPageComponent },
  { path: 'programs' , component: ProgramsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'detail/:id', component: DetailsComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'admin', component: BoardAdminComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
