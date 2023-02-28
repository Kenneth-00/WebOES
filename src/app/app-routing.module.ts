import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FillFormComponent } from './component/campus/fill-form/fill-form.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  {path: 'fill-form', component:FillFormComponent},
  {path: 'home', component:HomeComponent},
  {path: '', redirectTo:'/home', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
