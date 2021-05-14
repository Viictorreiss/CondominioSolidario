import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MuralComponent } from './mural/mural.component';



const routes: Routes = [
  {path: '', component: MuralComponent},
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }