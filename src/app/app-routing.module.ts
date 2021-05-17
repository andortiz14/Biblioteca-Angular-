import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LibroComponent} from './vistas/libro/libro.component';
import {LibroCrearComponent} from './vistas/libro-crear/libro-crear.component';
import {AutorComponent} from './vistas/autor/autor.component';
import {AutorCrearComponent} from './vistas/autor-crear/autor-crear.component';
import {EditorialComponent} from './vistas/editorial/editorial.component';
import {EditorialCrearComponent} from './vistas/editorial-crear/editorial-crear.component';
import { from } from 'rxjs';

const routes: Routes = [
  {path:'' , redirectTo:'autor' , pathMatch:'full'},
  {path:'libro', component:LibroComponent},
  {path:'libro-crear', component:LibroCrearComponent},
  {path:'autor', component:AutorComponent},
  {path:'autor-crear', component:AutorCrearComponent},
  {path:'editorial', component:EditorialComponent},
  {path:'editorial-crear', component:EditorialCrearComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LibroCrearComponent,LibroComponent,AutorComponent,AutorCrearComponent,EditorialComponent,EditorialCrearComponent]

