import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../servicios/api/api.service';
import {Router} from '@angular/router';
import {IEditorial} from '../../modelos/editorial.interface';

@Component({
  selector: 'app-editorial',
  templateUrl: './editorial.component.html',
  styleUrls: ['./editorial.component.css']
})
export class EditorialComponent implements OnInit {

  editoriales: IEditorial[] = [];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.getAllEditorial().subscribe(data =>{
      this.editoriales = data;
      console.log(this.editoriales);
     })

  }

  nuevoEditorial(){
    this.router.navigate(['editorial-crear']);
  }

}
