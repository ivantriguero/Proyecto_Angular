import { Injectable } from '@angular/core';
import data from '../../libros.json';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  libros=data

  getLibros():Observable<Array<any>>{
    this.libros=data;
    return of(this.libros);
  }
  eliminarLibro(id:any){
    let i=-1
    for(let libro of this.libros){
      if(libro.id==id){
        i=this.libros.indexOf(libro)
        break
      }
    }
    this.libros.splice(i,1);
  }
  addLibro(titulo:String,autor:String,descripcion:String){
    let libro={
      id: (Number(this.libros[this.libros.length-1].id)+1).toString(),
      titulo: titulo.toString(),
      autor: autor.toString(),
      descripcion: descripcion.toString()
    }
    this.libros.push(libro)
  }

  constructor() { }
}
