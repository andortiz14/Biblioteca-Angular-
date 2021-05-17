import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {Ilibro} from '../../modelos/libro.interface';



@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {

  libros: Ilibro[] = [];
  filterLibros = '';
  
  constructor(private api:ApiService, private router:Router) { } 


  ngOnInit(): void {

    this.api.getAllLibro().subscribe(data =>{
     this.libros = data;
     console.log(this.libros);
    })

   
  }

  nuevoLibro(){
    this.router.navigate(['libro-crear']);
  }

}
