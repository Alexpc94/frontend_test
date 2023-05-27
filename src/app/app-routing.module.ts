import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagnoexisteComponent } from './setting/pagnoexiste/pagnoexiste.component'
import { HomeComponent } from './setting/home/home.component'

const routes: Routes = [
  {path:'', redirectTo: 'inicio', pathMatch: 'full'},
  {path:'inicio', component: HomeComponent},
  {path: 'comprob', loadChildren: () => import('./components/comprobantes/comprobantes.module').then(m => m.ComprobantesModule)},
  {path: '**', component: PagnoexisteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
