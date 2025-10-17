import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoggerService } from '../logger-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrls: ['./header.scss']
})
export class Header {
  //#region constructor
  /**
   * constructor
   * @param logger - Service used for logging header related actions
   */
  constructor(private logger: LoggerService) { }
  //#endregion

  //#region Log Action 
  /**
   * Logs a user action from header
   * @param action - A description of user action to log
   * @returns void
   */
  public logAction(action: string): void {
    this.logger.log(`Header action: ${action}`);
  }
  //#endregion
}