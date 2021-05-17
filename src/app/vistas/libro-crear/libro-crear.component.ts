import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {Ilibro} from '../../modelos/libro.interface';
import {FormGroup, FormControl, Validator} from '@angular/forms'
import {AlertasService} from '../../servicios/alertas/alertas.service'
import {IAutor} from '../../modelos/autor.interface';
import {IEditorial} from '../../modelos/editorial.interface';


@Component({
  selector: 'app-libro-crear',
  templateUrl: './libro-crear.component.html',
  styleUrls: ['./libro-crear.component.css']
})
export class LibroCrearComponent implements OnInit {

  nuevoForm = new FormGroup({
    lbrTitulo: new FormControl(''),
    lbrAño: new FormControl(''),
    lbrGenero: new FormControl(''),
    lbrNumeroPaginas: new FormControl(''),
    lbrEdtId: new FormControl(''),
    lbrAtrId: new FormControl('')
  });

  autores: IAutor[] = [];
  editoriales: IEditorial[] = [];

  constructor(private api:ApiService, private router:Router, private alert:AlertasService) { }

  ngOnInit(): void {

    this.api.getAllAutor().subscribe(data =>{
      this.autores = data;
      console.log(this.autores);
     })

     this.api.getAllEditorial().subscribe(data =>{
      this.editoriales = data;
      console.log(this.editoriales);
     })

  }
  volver(){
    this.router.navigate(['libro']);
  }
  

  postForm(form:Ilibro){
    this.api.postLibro(form).subscribe(data => {
      console.log(data);
      this.alert.showSuccess('Registro creado correctamente','Hecho');
    })

    
  }

}
