import { SorcierService } from '../../services/sorcier.service';
import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Sorcier } from './../../../core/models/sorcier';
import { SorcierFormData } from 'src/app/core/models/sorcierFormData';

@Component({
  selector: 'app-sorcier-form',
  templateUrl: './sorcier-form.component.html',
  styleUrls: ['./sorcier-form.component.scss']
})
export class SorcierFormComponent implements OnInit {

  isUpdateMode: boolean;
  sorcierForm: FormGroup;

  classes: string[] = ['ANNEE-1','ANNEE-2','ANNEE-3','ANNEE-4','ANNEE-5'];
  constructor(
    private _formBuilder: FormBuilder,
    private _sorcierService: SorcierService,
    private _snackBar: MatSnackBar,
    private dialogRef: MatDialogRef<SorcierFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SorcierFormData
  ) {
    this.isUpdateMode = this.data.isUpdateMode;
  }

  ngOnInit(): void {
    this.initFormBuilder();
  }

  initFormBuilder() {
    this.sorcierForm = this._formBuilder.group({
      id: [
        this.data.isUpdateMode
          ? this.data.sorcierToUpdate.id
          : this.data.idToCreate,
        Validators.required,
      ],
      firstName: [
        this.data.isUpdateMode ? this.data.sorcierToUpdate.firstName : '',
        Validators.required,
      ],
      lastName: [
        this.data.isUpdateMode ? this.data.sorcierToUpdate.lastName : '',
        Validators.required,
      ],
      class: [
        this.data.isUpdateMode ? this.data.sorcierToUpdate.class : '',
        Validators.required,
      ],
      dateOfBirth: [
        this.data.isUpdateMode ? this.data.sorcierToUpdate.dateOfBirth : '',
        Validators.required,
      ],
    });
  }

  closeForm(id?: number) {
    this.sorcierForm.reset();
    this.dialogRef.close(id);
  }

  onSubmit(sorcier: Sorcier) {
    if (this.sorcierForm.valid) {
      if (this.data.isUpdateMode) {
        // update
        this._sorcierService.update(sorcier).subscribe((response) => {
          this.closeForm(sorcier.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      } else {
        // create
        this._sorcierService.create(sorcier).subscribe((response) => {
          this.closeForm(sorcier.id);
          this._snackBar.open(response, '', {
            duration: 2000,
            panelClass: ['mat-toolbar', 'mat-accent'],
          });
        });
      }
    }
  }

}
