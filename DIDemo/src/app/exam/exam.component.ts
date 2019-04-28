import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { SpringQuestion } from './services/springQuestion';
import { IQuestion } from './services/iQuestion';
import { AngularQuestion } from './services/angularQuestion';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.css'],
  providers: [{
    provide : IQuestion , useClass: AngularQuestion
  }]
})
export class ExamComponent implements OnInit {

  question : string = '';

  constructor(private loggingService : LoggingService, private iQuestion: IQuestion) { 
    this.loggingService.logInfo("Exam Component Object Created...!");
  }

  ngOnInit() {
    this.question = this.iQuestion.askQuestion();
  }

}
