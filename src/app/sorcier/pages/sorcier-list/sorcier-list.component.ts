import { Sorcier } from './../../../core/models/sorcier';
import { max, Observable, of } from 'rxjs';
import { SorcierService } from './../../services/sorcier.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { SorcierFormComponent } from '../../components/sorcier-form/sorcier-form.component';
import { SorcierFormData } from 'src/app/core/models/sorcierFormData';

@Component({
  selector: 'app-sorcier-list',
  templateUrl: './sorcier-list.component.html',
  styleUrls: ['./sorcier-list.component.scss']
})
export class SorcierListComponent implements OnInit {

  sorciers$: Observable<Sorcier[]>;
  displayedColumns: string[] = ['id', 'firstName', 'lastName'];

  ids: number[] = [];

  constructor(
    private _sorcierService: SorcierService,
    private _router: Router,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.sorciers$ = this._sorcierService.get();
  }

  showSorcierDetails(sorcier: Sorcier) {
    this._router.navigateByUrl('/sorcier/' + sorcier.id);
  }

  createSorcier() {
    const sorcierFormData: SorcierFormData = {
      isUpdateMode: false,
      idToCreate: Math.max(...this.ids) + 1,
    };

    const dialogRef = this._dialog.open(SorcierFormComponent, {
      data: sorcierFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.fetchData();
    });
  }

  setId(id: number) {
    //Bidouille
    this.ids.push(id);
  }

}
