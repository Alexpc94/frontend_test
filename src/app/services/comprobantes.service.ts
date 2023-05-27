import { Injectable } from '@angular/core';
import { Comprobante } from '../model/comprobante';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprobanteService {
  private baseUrl = '/api';  
  private comprob!: Comprobante[];
    
  constructor(private http: HttpClient) {
    this.comprob = [];
   }
   getCompLista(){
     return this.http.get(this.baseUrl+'/findAll');
   }

  saveComp(pro : Comprobante) : Observable<any> {  
      let url = this.baseUrl + "/create";  
        return this.http.post(url,pro);  
  }

  modComprobantes(xcodpro: number, pro : Comprobante) : Observable<any> {  
      let url = this.baseUrl + "/update/"+ xcodpro;  
        return this.http.put(url,pro);  
  }

  deleteComprobantes(xcodpro: number){   
    return this.http.delete(this.baseUrl+'/remove/'+ xcodpro);
  }

  getComprobantes(){
    return this.comprob;
  }

}
