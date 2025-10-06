import { Component } from '@angular/core';
import {  RouterLink, RouterOutlet } from '@angular/router';
import { LoggerService } from '../logger-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  constructor(private logger:LoggerService) {}

  logAction(action: string) {
    this.logger.log(`Header action: ${action}`);
}

}