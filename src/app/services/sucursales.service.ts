import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SucursalesService {

  private apiUrl = 'https://localhost:44345/api/sucursales';

  constructor(private http: HttpClient) { }

  getSucursales(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getSucursalById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  createSucursal(sucursal:any): Observable<any> {
    return this.http.post<any>(this.apiUrl, sucursal);
  }
  
  updateSucursal(id: number, sucursal:any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, sucursal);
  }

  deleteSucursal(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

}