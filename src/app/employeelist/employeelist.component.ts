import { Component, OnInit } from '@angular/core';
import { EmployeelistService } from '../employeelist.service';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers:[EmployeelistService]
})
export class EmployeelistComponent implements OnInit {
  constructor(private dbService:EmployeelistService) {}
employees=[]

  ngOnInit(): void {
    return (this.employees=this.dbService.getEmployee())
  }
}
