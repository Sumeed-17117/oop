import { Component, OnInit,} from '@angular/core';
import { ListCarsService } from '../list-cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css'],
  providers: [ListCarsService]
})
export class CarListComponent implements OnInit {
Cars:any=[]
  constructor() { }

  ngOnInit(): void {
  }

}
