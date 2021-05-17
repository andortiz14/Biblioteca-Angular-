import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {IAutor} from '../../modelos/autor.interface';

@Component({
  selector: 'app-autor',
  templateUrl: './autor.component.html',
  styleUrls: ['./autor.component.css']
})
export class AutorComponent implements OnInit {

  autores: IAutor[] = [];
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.getAllAutor().subscribe(data =>{
      this.autores = data;
      console.log(this.autores);
     })
  }

  nuevoAutor(){
    this.router.navigate(['autor-crear']);
  }

}
