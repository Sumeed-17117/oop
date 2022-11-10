import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListCarsService {
Cars=[{"Owner":"Sumeed", "Name":"BR-V","Categ":"Sedan"},
{"Owner":"Sumeed", "Name":"Wrangler","Categ":"Jeep"},
{"Owner":"Sumeed", "Name":"AMG","Categ":"Coupe"},
{"Owner":"Sumeed", "Name":"Revo","Categ":"4x4"},
{"Owner":"Sumeed", "Name":"Cadillac","Categ":"SUV"},]
  constructor() { }

getCar(){
console.log (this.Cars)
}
}
