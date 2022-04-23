import { SorcierFormData } from './../../../core/models/sorcierFormData';
import { SorcierFormComponent } from './../../components/sorcier-form/sorcier-form.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SorcierService } from './../../services/sorcier.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Sorcier } from 'src/app/core/models/sorcier';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';

@Component({
  selector: 'app-sorcier-details',
  templateUrl: './sorcier-details.component.html',
  styleUrls: ['./sorcier-details.component.scss']
})
export class SorcierDetailsComponent implements OnInit {

  sorcier$: Observable<Sorcier>;
  constructor(
    private _sorcierService: SorcierService,
    private _activatedRoute: ActivatedRoute,
    public _dialog: MatDialog,
    private _snackBar: MatSnackBar,
    private _router: Router,
    private _location: Location
  ) {}

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.fetchData(params['id']);
    });
  }

  fetchData(id: number) {
    this.sorcier$ = this._sorcierService.getById(id);
  }

  updateSorcier(sorcier: Sorcier) {
    const sorcierFormData: SorcierFormData = {
      isUpdateMode: true,
      sorcierToUpdate: sorcier,
    };

    const dialogRef = this._dialog.open(SorcierFormComponent, {
      data: sorcierFormData,
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.fetchData(result);
      }
    });
  }

  deleteSorcier(id: number) {
    this._sorcierService.delete(id).subscribe((response) => {
      this._snackBar.open(response, '', {
        duration: 2000,
        panelClass: ['mat-toolbar', 'mat-accent'],
      });

      this._router.navigateByUrl('/sorcier');
    });
  }

  goBack() {
    this._location.back();
  }
}
