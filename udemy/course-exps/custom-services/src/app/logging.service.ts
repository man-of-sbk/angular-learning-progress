export class LoggingService {
  logStatusChange(status: string) {
    console.log('a server status changed, new status: ' + status);
  }

  constructor() {
    console.log('start')
  }
}