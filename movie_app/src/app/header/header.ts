import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { LoggerService } from '../logger-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {

  /**
   * 
   * @param logger - Service used for logging header related actions
   */
  constructor(private logger: LoggerService) { }

    /**
     * 
     * @param action - A description of user action to log
     */
  public logAction(action: string): void {
    this.logger.log(`Header action: ${action}`);
  }

}