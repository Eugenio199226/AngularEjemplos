import { Component, OnInit } from '@angular/core';
import { User } from '../models/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-componente-a',
  templateUrl: './componente-a.component.html',
  styleUrls: ['./componente-a.component.scss']
})
export class ComponenteAComponent implements OnInit {

  usuarios:User[] = null;
  constructor(private _userService:UserService) { }

  ngOnInit() {
    this.usuarios=this._userService.getUsusarios();
  }

}
