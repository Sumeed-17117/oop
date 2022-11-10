import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeelistService {
  employees=[
    {"name":"Sumeed", "Job":"Developer"},
    {"name":"Shakoor", "Job":"Trainer"},
    {"name":"Fazal", "Job":"Team Lead"},
    {"name":"Sumeed", "Job":"Developer"}
  ]

  constructor() { }

  getEmployee():any{
    return (this.employees)
  }
}
