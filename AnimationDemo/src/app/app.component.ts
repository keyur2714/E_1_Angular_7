import { Component, HostBinding } from '@angular/core';
import { STATE_ANIMATION } from './simple-state.animation';
import { ON_OFF_2_ANIMATION } from './on-off-2.animation';
import { ROUND_ANTICLOCK_ANIMATION } from './round-anticlock.animation';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations : [STATE_ANIMATION,ON_OFF_2_ANIMATION,ROUND_ANTICLOCK_ANIMATION]
})
export class AppComponent {

  @HostBinding('@roundAntiClockTrigger') roundAntiClockTrigger = 'in';
  @HostBinding('style.display')   display = 'block';
  //@HostBinding('style.position')  position = 'absolute'; 

  title = 'AnimationDemo';

  state : string = 'start';

  tableState : string = 'on';

  toggleState():void {
    this.state = (this.state == 'start' ? 'stop' : 'start');
    this.tableState = (this.tableState == 'on' ? 'off' : 'on');
  }

  studentNames : string[] = ["keyur","denish","vinit","hiren","ravi"];


}
