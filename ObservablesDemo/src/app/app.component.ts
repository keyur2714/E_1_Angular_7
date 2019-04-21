import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, Subscription, Subject, from, of, range, pipe  } from 'rxjs';
import { map, filter, scan, tap } from 'rxjs/operators';


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

  source$ = of("keyur","denish","vinit","ami","darsh","sachin","viru");

  ngOnInit(){

      const calculationFun = pipe(
        filter((n: number) => n % 2 === 1),
        map((n: number) => n + 10)
        //scan((sum, n) => sum + n)
      );
    
      //Instantiate response Observable
      const calculation$ = calculationFun(of(1,2,3,4,5,6));
    
      //Subscribe the Observable instance
      calculation$.subscribe(result => console.log(result));

    //----------

     const filteredFunc = pipe(
      filter((name: string) => name.length > 4),
      map((name : string) => name.toUpperCase())      
     );
     const result$ = filteredFunc(of("keyur","viru", "denish","vinit")); 
     result$.subscribe(
       (data)=>{
         console.log(data);
       }
     )
    
     this.subscription = this.nubmerObservables.subscribe(
       (data:number)=>{        
         this.newNumber = data;
       },(error)=>{
       }
     )
     this.subject1.subscribe((data)=>{
       console.log("Hi..."+ data);
     });  
     this.subject2.subscribe((data)=>{
       console.log("Hello..."+ data);
     });  
      const observable1 = from([1, 2, 3]);    
      observable1.subscribe(this.subject1);
      const observable2 = of('Radhe Krishna...!');    
      observable2.subscribe(this.subject2);

      //Pipe and TAP

      this.source$.pipe(
        tap(  name => console.log("Process "+ name),
              err => console.error(err),
              () => console.log("Complete")
        ),
        filter(name => name.startsWith("d"))
       ).subscribe(el => console.log("D names: "+ el)); 
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
