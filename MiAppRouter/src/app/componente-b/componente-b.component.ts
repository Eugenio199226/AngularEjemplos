import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedido';

@Component({
  selector: 'app-componente-b',
  templateUrl: './componente-b.component.html',
  styleUrls: ['./componente-b.component.scss']
})
export class ComponenteBComponent implements OnInit {

  constructor() { }
  pedidos:Pedido[] = null;

  ngOnInit() {
    this.pedidos=[
      new Pedido(1,'Joe',30),
      new Pedido(2,'Billy',30),
      new Pedido(3,'Jonas',30),
      new Pedido(4,'Andreu',30),
    ];
  }

}
