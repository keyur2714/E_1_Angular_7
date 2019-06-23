import { animate, state, style, transition, trigger, sequence } from '@angular/animations';

export const ROUND_ANTICLOCK_ANIMATION =
  trigger('roundAntiClockTrigger', [
    state('in', style({
	    backgroundColor: 'orange',
	    color: 'white'
    })),  
    transition('void => *', sequence([
        style({
		 transform: 'rotate(270deg)',
  		 opacity: 0,
		 backgroundColor: '#0D6063'
	}),
        animate('10.0s ease-in-out')
    ])),
    transition('* => void', sequence([ 
	      style({backgroundColor: '#0D6063'}),
        animate('0.6s ease-out', style({transform: 'rotate(-270deg)', opacity: 0}))
    ]))
  ]);  