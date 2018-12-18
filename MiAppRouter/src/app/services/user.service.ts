import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { TouchSequence } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _usuarios:User[]=[
    new User(1,'pepe','hola@pwned.es',23),
    new User(2,'Manola','hola@pwned.es',33),
    new User(3,'Roberta','hola@pwned.es',43),
    new User(4,'Andrea','hola@pwned.es',53),
  ];
  constructor() {
    
   }
   getUsusarios():User[]
   {
      return this._usuarios;
   }
}
