import { Component } from '@angular/core';
import { DataService } from '../service.service';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent {
  constructor(private dataService:DataService){}

  onClick(){
    this.dataService.get()
  }

}
