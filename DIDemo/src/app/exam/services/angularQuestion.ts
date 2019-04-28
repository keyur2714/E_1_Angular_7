import { IQuestion } from './iQuestion';

export class AngularQuestion extends IQuestion {
    askQuestion(): string {
        return  "What is Angular?";
    }
    
}