import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})
export class ListadoComponent {

  heroes: string[]= ['Pantera','Spiderman','Ironman','Hulk','Pantera'];
  heroeBorrado: string ='';
  
  borrarHeroe() {
    
    this.heroeBorrado = this.heroes.shift() || '';

  }

}
