import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SorcierDetailsComponent } from './pages/sorcier-details/sorcier-details.component';
import { SorcierListComponent } from './pages/sorcier-list/sorcier-list.component';
import { SorcierComponent } from './sorcier.component';

const routes: Routes = [
  {
    path: '',
    component: SorcierComponent,
    children : [
      {
        path: '',
        component: SorcierListComponent,
      },
      {
        path: ':id',
        component: SorcierDetailsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SorcierRoutingModule { }
