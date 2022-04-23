import { SorcierService } from './services/sorcier.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SorcierRoutingModule } from './sorcier-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SorcierComponent } from './sorcier.component';
import { SorcierListComponent } from './pages/sorcier-list/sorcier-list.component';
import { SorcierDetailsComponent } from './pages/sorcier-details/sorcier-details.component';
import { SorcierFormComponent } from './components/sorcier-form/sorcier-form.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    SorcierComponent,
    SorcierListComponent,
    SorcierDetailsComponent,
    SorcierFormComponent
  ],
  imports: [
    CommonModule,
    SorcierRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [SorcierService, MatDatepickerModule, MatNativeDateModule],

})
export class SorcierModule { }
