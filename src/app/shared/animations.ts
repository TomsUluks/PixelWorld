import { trigger, state, animate, style, transition, keyframes } from '@angular/animations';

export const fadeAnimation =
    trigger('fadeAnimation', [
        state('*', style({opacity: 1})),
        state('void', style({opacity: 0})),
        transition('* => void', animate('200ms fade-out')),
        transition('void => *', animate('200ms fade-in'))
    ])