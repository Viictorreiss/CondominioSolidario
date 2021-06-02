import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CadastroCondominioComponent } from './cadastro-condominio/cadastro-condominio.component';
import { CadastroUserComponent } from './cadastro-user/cadastro-user.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { HomeComponent } from './home/home.component';
import { PerfilSindComponent } from './perfil-sind/perfil-sind.component';
import { PerfilUsuComponent } from './perfil-usu/perfil-usu.component';

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
    path: 'perfil',
    component: PerfilSindComponent
 },

   // otherwise redirect to home
   // { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);
