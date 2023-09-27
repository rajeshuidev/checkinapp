import { Component } from '@angular/core';
import { CheckInComponent } from './check-in/check-in.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[CheckInComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'webcheckin';
}
