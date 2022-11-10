import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { CarListComponent } from './car-list/car-list.component';
import { ListCarsService } from './list-cars.service';
@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CarListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
