import { trigger,state,style,transition,animate,keyframes } from '@angular/animations';
export const STATE_ANIMATION=
    trigger('stateTrigger', [
		state('start', style({
          backgroundColor: 'red',
		      transform: 'translateX(0)'
		})),
		state('stop',   style({
		  backgroundColor: 'green',
		  transform: 'translateX(100%)'
        })),
        transition('start => stop', animate('9s ease-in',
            keyframes([ 
              style({width: '110px',height: '110px', backgroundColor: 'yellow', offset: 0.1 }),
	            style({width: '120px',height: '120px', backgroundColor: 'green', offset: 0.3 }),
	            style({width: '100px',height: '100px', backgroundColor: 'blue', offset: 0.5 })
            ])    
        )),
        transition('stop => start', animate('2s ease-out'))
]);