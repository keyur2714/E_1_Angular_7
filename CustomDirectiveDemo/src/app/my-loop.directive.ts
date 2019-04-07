import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[appMyLoop]'
})
export class MyLoopDirective {

  constructor(private viewContainerRef:ViewContainerRef,private templateRef:TemplateRef<any>) { }

  @Input("appMyLoop") set myLoop(counter:number){
    for(let i=1;i<=counter;i++){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }
  }
}
