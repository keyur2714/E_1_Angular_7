import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription, Subject, from, of, range  } from 'rxjs';
import { map, filter, scan } from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy{
  title = 'ObservablesDemo';
  newNumber : number = 0;

  subscription : Subscription = new Subscription();

  subject1 = new Subject<number>();
  subject2 = new Subject<string>();
  nubmerObservables = interval(1000);

  source$ = of(["keyur","denish","vinit","sachin","viru"]);

  ngOnInit(){

     const filteredObservables:Observable<string[]> = this.source$.pipe(
      filter( ( names : string[]) => {        
         let i=0;
         for(let name of names){
           if(name.length > 4){
            names[i]=name.toUpperCase();
           }else{
            names.splice(i,1);
           }       
           i++;   
         }
         if(names.length > 4){           
            return true;
         }
      }),
      map((names : string[]) => {  
         let i=0;
         for(let name of names){
          names[i++]=name.toUpperCase();
         }
         return names;
      })      
    );
    
     filteredObservables.subscribe(
       (data: string[])=>{
         console.log("********"+ data);
       }
     )
    
      this.source$.subscribe(
        (data)=>{
          console.log(data);
        }
      )

    // this.subscription = this.nubmerObservables.subscribe(
    //   (data:number)=>{        
    //     this.newNumber = data;
    //   },(error)=>{
    //   }
    // )
    // this.subject1.subscribe((data)=>{
    //   console.log("Hi..."+ data);
    // });  
    // this.subject2.subscribe((data)=>{
    //   console.log("Hello..."+ data);
    // });  
    //  const observable1 = from([1, 2, 3]);    
    //  observable1.subscribe(this.subject1);
    //  const observable2 = of('Radhe Krishna...!');    
    //  observable2.subscribe(this.subject2);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
