import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validator} from '@angular/forms'
import {AlertasService} from '../../servicios/alertas/alertas.service'
import { IAutor } from 'src/app/modelos/autor.interface';

@Component({
  selector: 'app-autor-crear',
  templateUrl: './autor-crear.component.html',
  styleUrls: ['./autor-crear.component.css']
})
export class AutorCrearComponent implements OnInit {

  nuevoForm = new FormGroup({
    atrNombre: new FormControl(''),
    atrFechaNacimiento: new FormControl(''),
    atrCiudad: new FormControl(''),
    atrEmail: new FormControl('')
    
  });

  constructor(private api:ApiService, private router:Router, private alert:AlertasService) { }

  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['autor']);
  }
  postFormAutor(form:IAutor){
    this.api.postAutor(form).subscribe(data => {
      console.log(data);
      this.alert.showSuccess('Registro creado correctamente','Hecho');
    })
  }

}
