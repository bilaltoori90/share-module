import { Component } from '@angular/core';
import { DataService } from '../service.service';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent {

  constructor(private dataSer:DataService){}

  onClick(){
    this.dataSer.get()
  }

}
