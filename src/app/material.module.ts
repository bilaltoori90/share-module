import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button'
import { AppComponent } from './app.component';



@NgModule({
  declarations: [],
  imports: [
    MatButtonModule
    
  ],
  exports:[
    MatButtonModule
  ],
  // bootstrap: [AppComponent],
})
export class MaterialModule { }
