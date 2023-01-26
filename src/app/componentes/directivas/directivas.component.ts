import { Component } from '@angular/core';
import { estudiante } from 'src/app/models/estudiante';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.css']
})
export class DirectivasComponent {
  titulo:string="lista de alumnos"
  estudianteActual:estudiante={
    nombre: 'juan',
    apellido: 'pereyra',
    edad: 22,
    estaActivo:true
  };
  listaEstudiantes: Array<estudiante>=[
    { nombre: 'juan',
    apellido: 'pereyra',
    edad: 22,
    estaActivo:true},
    { nombre: 'carlos',
    apellido: 'pereyra',
    edad: 34,
    estaActivo:false},
    { nombre: 'Maria',
    apellido: 'Gomez',
    edad: 18,
    estaActivo:false},
    { nombre: 'Sol',
    apellido: 'Gomez',
    edad: 50,
    estaActivo:true},
    { nombre: 'Kiara',
    apellido: 'Rolman',
    edad: 15,
    estaActivo:true}
  ];
}
