import { Component , OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PipesDemo';
  name : string = "Keyur";
  today : Date = new Date();
  numberObservable = interval(1000);

  mobileNo : string = '7387029671';

  //num : number = 0;
  ngOnInit(){
    // this.numberObservable.subscribe(
    //   (data)=>{
    //     this.num = data;
    //   }
    // )
  }

  emp = {
    id : 10,
    name : 'keyur',
    city : 'surat',
    mobileNo : '7387029671'
  };

}
