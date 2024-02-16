import { Component } from '@angular/core';
import { order } from '../../../Models/order';
import { OrderService } from '../../order.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-orders-info',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './view-orders-info.component.html',
  styleUrl: './view-orders-info.component.css',
})
export class ViewOrdersInfoComponent {
  order: order = new order();

  constructor(private http: OrderService, private rt: ActivatedRoute) {}

  ngOnInit() {
    let value: any;
    if (typeof window !== 'undefined') {
      value = localStorage.getItem('myid');
      console.log(value);
    }
    if (value) {
      this.http.getorderbyOrderNo(value).subscribe((data) => {
        this.order = data as order;
      });
    }
  }
}
