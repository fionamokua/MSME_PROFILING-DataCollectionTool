import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BiasharaStimulusComponent } from "./biashara-stimulus/biashara-stimulus.component";
import { NavComponent } from "./nav/nav.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, BiasharaStimulusComponent, NavComponent]
})
export class AppComponent {
  title = 'DataCollection';
}
