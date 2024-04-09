import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiasharaStimulusComponent } from "./biashara-stimulus/biashara-stimulus.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BiasharaStimulusComponent]
})
export class AppComponent {
  title = 'DataCollection';
}
