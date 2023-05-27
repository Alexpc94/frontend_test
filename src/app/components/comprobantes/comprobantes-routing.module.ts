import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprobComponent } from './comprob/comprob.component'

const routes: Routes = [
  { path: '', component: ComprobComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComprobantesRoutingModule { }
