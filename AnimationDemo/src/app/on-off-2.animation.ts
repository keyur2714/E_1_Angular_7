import { animate, state, style, transition, trigger,keyframes  } from '@angular/animations';

export const ON_OFF_2_ANIMATION =
	trigger('onOff2Trigger', [
		state('off', style({
		  backgroundColor: 'red',
		  color: 'white',
		  fontSize: '18px',		  
		  transform: 'rotate(360deg)'
		})),
		state('on',   style({
		  backgroundColor: '#17202A',
		  color: '#F0F3F4',
		  fontSize: '22px',
		  transform: 'rotate(360deg)'
		})),
		transition('off => on', animate('5.6s 200ms ease-in',keyframes([ 
		   style({fontSize: '19px', backgroundColor: 'yellow', offset: 0.1 }),
		   style({fontSize: '20px', backgroundColor: 'green', offset: 0.3 }),
		   style({fontSize: '21px', backgroundColor: 'red', offset: 0.5 })
		]))),
		transition('on => off', animate('6.7s 200ms ease-out', keyframes([ 
		    style({fontSize: '22px', backgroundColor: 'yellow', offset: 0 }),
		    style({fontSize: '21px', backgroundColor: 'green', offset: 0.2 }),
		    style({fontSize: '20px', backgroundColor: 'red', offset: 0.4 }),
		   style({fontSize: '19px', backgroundColor: 'blue', offset: 0.5 })
		 ])))
	]); 