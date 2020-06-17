import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchClasses'
})
//value = propiedad que voy a transformar
//despues de el vienen variables encargadas de manipular dicho valor
export class SearchClassesPipe implements PipeTransform {
  transform(value: any, searchText?: any): any { 

    if (!value) {
      return;
    }
    if (!searchText) {
      return value; //si no se ha buscado nada mantenga el value de alguna buscada pasada
    }
    searchText = searchText.toLowerCase(); //el texto buscado siempre se interpreta en minuscula

    return value.filter(item => { //le aplico por medio de filter, ciertas condiciones al value que el item será encargado de manipular 
      let matchFound = false; //deshabilitado mientras no busque
      //si viene nombre y url

      if (item.name) {
        const name = item.name; //guardo su nombre del item de la busqueda
        const index = item.id;
        //guardo el name y el index y lo transformo en una cadena de json, donde a esos valores les incluyo el texto buscado por el usuario
        const searchName = JSON.stringify(name).toLowerCase().includes(searchText);
        const searchId = JSON.stringify(index).toLowerCase().includes(searchText);
        //si busco por nombre o id
        if (searchName || searchId) {
          matchFound = true; //encontro match por id o nombre
        }
      }
      return matchFound; //retorno su valor
    });
    
  }
}
