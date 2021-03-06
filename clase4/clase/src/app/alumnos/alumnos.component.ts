import { Component, OnInit } from '@angular/core';
import {AlumnosService} from  '../service/alumnos.service';
import {Alumno}  from '../serviceObjects/alumno';

@Component({
  selector: 'app-alumnos-tec',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css'],
  providers:[AlumnosService]
})

export class AlumnosComponent implements OnInit {


  modeloNombre: String;
  modeloCarrera: String;
  modeloMatricula: String ='';
	director: String;
	escuela: String;
	alumnos: Alumno[];

	

  constructor(private alumnoService : AlumnosService) { 
  	this.director="Leopoldo";
  	this.escuela="CCM";

  	 this.alumnos = alumnoService.obtenerAlumnos();
     this.modeloNombre = '';
     this.modeloCarrera = '';
     this.modeloMatricula ='';

  }

  ngOnInit() {
  }

  crearAlumno(){
  	let nuevoAlumno: Alumno ={
  		nombre: this.modeloNombre,
  		matricula : this.modeloMatricula,
  		carrera: this.modeloCarrera
  	};
  	this.alumnos.push(nuevoAlumno);
    this.modeloNombre = '';
    this.modeloMatricula ='';
    this.modeloCarrera = '';
  }















}
