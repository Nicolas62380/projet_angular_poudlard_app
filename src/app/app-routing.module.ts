import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sorcier',
    pathMatch: 'full',
  },
  {
    path: 'sorcier',
    loadChildren: () =>
      import('./sorcier/sorcier.module').then((m) => m.SorcierModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
