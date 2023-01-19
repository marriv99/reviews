import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  data: any;

  constructor(private http: HttpClient) {
    this.data = null;
   }

   getRecensioni() {
    if (this.data) {
      return Promise.resolve(this.data);
    }
  
    return new Promise(resolve => {
      this.http.get('http://localhost:3000/recensione').subscribe(
        data => {
          this.data = data;
          resolve(this.data);
        });
    });
  }
  
  addRecensione(recensione) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    this.http.post('http://localhost:3000/recensione', JSON.stringify(recensione), httpOptions).subscribe(
      results => {
        console.log(results);
      });
  }
  
  deleteRecensione(id) {
    this.http.delete('http://localhost:3000/recensione/' + id).subscribe(
      results => {
        console.log(results);
      });
  }
}