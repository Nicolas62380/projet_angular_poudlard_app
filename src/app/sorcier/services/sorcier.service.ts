import { environment } from './../../../environments/environment';
import { Sorcier } from './../../core/models/sorcier';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { max, Observable } from 'rxjs';

@Injectable()
export class SorcierService {
  private readonly sorcierPath: string = '/sorciers';

  constructor(private _http: HttpClient) {}

  get(): Observable<Sorcier[]> {
    return this._http.get<Sorcier[]>(
      `${environment.apiBaseUrl}${this.sorcierPath}`
    );
  }

  getById(id: number): Observable<Sorcier> {
    return this._http.get<Sorcier>(
      `${environment.apiBaseUrl}${this.sorcierPath}/${id}`
    );
  }

  create(sorcier: Sorcier): Observable<string> {
    return this._http.post<string>(
      `${environment.apiBaseUrl}${this.sorcierPath}`,
      sorcier
    );
  }

  update(sorcier: Sorcier): Observable<string> {
    return this._http.put<string>(
      `${environment.apiBaseUrl}${this.sorcierPath}/${sorcier.id}`,
      sorcier
    );
  }

  delete(id: number): Observable<string> {
    return this._http.delete<string>(
      `${environment.apiBaseUrl}${this.sorcierPath}/${id}`
    );
  }
}
