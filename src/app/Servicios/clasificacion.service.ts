import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClasificacionService {
  // Lista de clasificaciones 
  clasificaciones: { [key: string]: any[] } = {
    'Favoritas': [],
    'Interesado': [],
    'En curso': [],
    'Descartado': []
  };

 
    clasificar(pelicula: any, tipo: string) {
     
      
      this.eliminarDeListas(pelicula); 
      if (this.clasificaciones[tipo]) {
        this.clasificaciones[tipo].push(pelicula); 
        
      } else {
        console.warn(`Clasificación ${tipo} no existe`);
      }
    }

  private eliminarDeListas(pelicula: any) {
    for (const key in this.clasificaciones) {
      this.clasificaciones[key] = this.clasificaciones[key].filter(p => p.titulo !== pelicula.titulo);
    }
  }

  obtenerClasificadas(tipo: string) {
    return this.clasificaciones[tipo] || [];
  }

  agregarClasificacion(nuevaClasificacion: string) {
    if (!this.clasificaciones[nuevaClasificacion]) {
      this.clasificaciones[nuevaClasificacion] = [];
    }
  }

  eliminarClasificacion(nombreClasificacion: string) {
    delete this.clasificaciones[nombreClasificacion];
  }

  obtenerClasificaciones() {
    return Object.keys(this.clasificaciones);
  }

  eliminarPeliculaDeClasificacion(nombreClasificacion: string, index: number) {
    if (this.clasificaciones[nombreClasificacion]) {
      this.clasificaciones[nombreClasificacion].splice(index, 1);
    }
  }
}
