import { Component } from '@angular/core';
import { getTypeNameForDebugging } from '@angular/common/src/directives/ng_for_of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'MiApp';
  nombre:string = 'Eugenio';
  edad:number = 245;


  getName():string
{
  return this.nombre+" "+this.title+" "+this.edad;
}
}

