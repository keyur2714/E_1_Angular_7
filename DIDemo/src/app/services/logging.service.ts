export class LoggingService {
    constructor(){
        console.log("Logging Service Object Created...");
    }
    date : Date = new Date();    
    public logInfo(logMsg: String):void{
        console.log("Info : "+this.date+ " "+ logMsg);
    }
    public logError(logMsg: String):void{
        console.log("Error : "+this.date+ " "+ logMsg);
    }
    public logDebug(logMsg: String):void{
        console.log("Debug : "+this.date+ " "+ logMsg);
    }
}