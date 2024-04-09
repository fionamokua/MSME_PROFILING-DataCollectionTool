import { Component } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';




@Component({
  selector: 'app-biashara-stimulus',
  standalone: true,
  imports:[NgIf, NgClass, MatRadioModule, MatFormFieldModule, MatSelectModule, MatCheckboxModule],
  templateUrl: './biashara-stimulus.component.html',
  styleUrl: './biashara-stimulus.component.css'
})
export class BiasharaStimulusComponent {


  // testing select
  selected = 'option1';

}
