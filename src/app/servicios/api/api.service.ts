import { Injectable } from '@angular/core';
import { Ilibro } from '../../modelos/libro.interface';
import {ResponseI} from '../../modelos/response.interface';
import {HttpClient , HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import { IAutor } from 'src/app/modelos/autor.interface';
import { IEditorial } from 'src/app/modelos/editorial.interface';


@Injectable({
  providedIn: 'root'
})
export  class ApiService {

  url : string = "http://localhost:14854/";

  constructor(private http: HttpClient) { }

  getAllLibro():Observable<Ilibro[]>{
    
    let direccion = this.url +'api/libro'

    return this.http.get<Ilibro[]>(direccion);
  }
  
  postLibro(form:Ilibro):Observable<ResponseI>{
    let direccion = this.url +'api/libro';
    return this.http.post<ResponseI>(direccion,form);
  }

  getAllAutor():Observable<IAutor[]>{
    
    let direccion = this.url +'api/autor'

    return this.http.get<IAutor[]>(direccion);
  }

  postAutor(form:IAutor):Observable<ResponseI>{
    let direccion = this.url +'api/autor';
    return this.http.post<ResponseI>(direccion,form);
  }
  getAllEditorial():Observable<IEditorial[]>{
    
    let direccion = this.url +'api/Editorial'

    return this.http.get<IEditorial[]>(direccion);
  }

  postEditorial(form:IEditorial):Observable<ResponseI>{
    let direccion = this.url +'api/Editorial';
    return this.http.post<ResponseI>(direccion,form);
  }

}
