import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validator} from '@angular/forms'
import {AlertasService} from '../../servicios/alertas/alertas.service'
import { IEditorial } from 'src/app/modelos/editorial.interface';

@Component({
  selector: 'app-editorial-crear',
  templateUrl: './editorial-crear.component.html',
  styleUrls: ['./editorial-crear.component.css']
})
export class EditorialCrearComponent implements OnInit {


  nuevoForm = new FormGroup({
    edtNombre: new FormControl(''),
    edtDireccion: new FormControl(''),
    edtTelefono: new FormControl(''),
    edtEmail: new FormControl(''),
    edtMaximo: new FormControl('')
    
  });

  constructor(private api:ApiService, private router:Router, private alert:AlertasService) { }

 
  ngOnInit(): void {
  }

  volver(){
    this.router.navigate(['editorial']);
  }

  postFormEditorial(form:IEditorial){
    this.api.postEditorial(form).subscribe(data => {
      console.log(data);
      this.alert.showSuccess('Registro creado correctamente','Hecho');
    })
  }

}
