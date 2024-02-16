import { Component } from '@angular/core';
import { ItemsComponent } from '../items/items.component';

@Component({
  selector: 'app-texter',
  standalone: true,
  imports: [ItemsComponent],
  templateUrl: './texter.component.html',
  styleUrl: './texter.component.css'
})
export class TexterComponent {

}
