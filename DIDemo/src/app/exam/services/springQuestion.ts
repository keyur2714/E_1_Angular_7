import { IQuestion } from './iQuestion';

export class SpringQuestion extends IQuestion {
    askQuestion(): string {
        return "What is String?";
    }    
}