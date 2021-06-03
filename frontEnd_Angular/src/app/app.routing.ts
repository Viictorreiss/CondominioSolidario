import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { CondominioRegistryComponent } from './condominio-registry/condominio-registry.component';


const appRoutes: Routes = [
   { 
      path: '', 
      component: HomeComponent 
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
      path: 'condominio',
      component: CondominioRegistryComponent
   },

   // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
