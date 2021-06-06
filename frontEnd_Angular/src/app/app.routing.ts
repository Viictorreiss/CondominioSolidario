import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { MuralComponent } from './mural/mural.component';
import { AddTaskComponent } from './addTask/addTask.component';

const appRoutes: Routes = [
   { 
      path: '', 
      component: HomeComponent 
   },
   {
      path: 'mural',
      component: MuralComponent
   },
   { 
      path: 'cadastro', 
      component: CadastroUserComponent 
   },
   {
      path: 'login',
      component: LoginUserComponent
   },
   {
      path: 'addTask',
      component: AddTaskComponent
   },

   // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
