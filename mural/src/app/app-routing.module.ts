import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NovoComponent } from "./novo-post/novo-post.component";
import { MuralComponent } from './mural/mural.component';

const routes: Routes = [
  {path: '', component: MuralComponent},
  {path: 'Novo', component: NovoComponent}
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes); */

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }