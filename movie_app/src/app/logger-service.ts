import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {

  /**
   * Logs message to browser console
   * @param message - The message to log
   * @param data - Additional data to include in log
   */
  log(message: string, data?: any) {
    if (data) {
      console.log(`[LOG]: ${message}`, data);
    } else {
      console.log(`[LOG]: ${message}`);
    }
  }
  
}
