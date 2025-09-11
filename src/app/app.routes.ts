import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
// Importar componentes antes de mapear rutas 
import { Home } from './home/home';
import { Login } from './login/login';
import { Carrito } from './carrito/carrito';
import { Regalos } from './regalos/regalos';
import { TortasTematicas } from './tortas-tematicas/tortas-tematicas';
import { Ocasiones } from './ocasiones/ocasiones';
import { Register } from './register/register';
import { Services } from './services/services';
import { Auth } from './services/auth';
import { AuthGuard } from './services/auth-guard';
import { Home2 } from './home2/home2';


export const routes: Routes = [
    {path : '', component: Home},
    { path: 'home', component: Home, canActivate: [AuthGuard] },
    {path : 'login', component: Login},
    {path : 'carrito', component: Carrito},
    {path : 'regalos', component: Regalos},
    {path : 'ocasiones', component: Ocasiones},
    {path : 'tortas-tematicas', component: TortasTematicas},
    {path : 'register', component: Register},
    {path : 'home2', component: Home2}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}