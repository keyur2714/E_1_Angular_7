import { Component } from '@angular/core';
import { LoggingService } from './services/logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DIDemo';

  constructor(private loggingService : LoggingService){
    this.loggingService.logInfo("App Component Object Created...!");
  }

}
