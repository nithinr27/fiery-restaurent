import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { order } from '../../../Models/order';
import { OrderService } from '../../order.service';

@Component({
  selector: 'app-view-orders',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './view-orders.component.html',
  styleUrl: './view-orders.component.css',
})
export class ViewOrdersComponent {
  constructor(
    private http: HttpClient,
    private service: OrderService,
    private route: Router
  ) {
    this.get();
  }

  orderdata: order[] = [];
  orderdel: any = [];
  isadd: boolean = false;
  isupdate: boolean = false;

  postJson() {
    this.http
      .post('http://localhost:3000/orders', this.jdata)
      .subscribe((res) => {
        console.log('Data saved successfully:', res);
        this.isupdate = false;
      });
  }
  getAllorders() {
    this.service.getAll().subscribe((data: order[]) => {
      this.orderdata = data;
      console.log(this.orderdata);
    });
  }

  get() {
    this.http.get('http://localhost:3000/orders').subscribe((res) => {
      this.orderdel = res;
    });
  }
  check() {
    this.isadd = true;
  }
  jdata = {
    order_no: '',
    name: '',
    order_date: '',
    items_ordered: '',
    order_total: '',
    Tax_total: '',
    Grand_total: '',
  };
  updatefetch(order_no: string) {
    this.isadd = false;
    this.isupdate = true;
    const c = this.orderdel.find((p: any) => {
      return p.order_no === order_no;
    });

    this.jdata.order_no = c.order_no;
    this.jdata.name = c.name;
    this.jdata.order_date = c.order_date;
    this.jdata.items_ordered = c.items_ordered;
    this.jdata.order_total = c.order_total;
    this.jdata.Tax_total = c.Tax_total;
    this.jdata.Grand_total = c.Grand_total;
  }
  updateorder(event: any, order_no: string, value: any) {
    if (confirm('Are you sure you want to update this data')) {
      this.http
        .put(`http://localhost:3000/orders${order_no}`, value)
        .subscribe(() => {
          this.getAllorders();
          alert('update');
        });
    }
  }
  // searchOrderId: string = '';

  // searchOrder(): void {
  //   if (this.searchOrderId.trim() !== '') {
  //     this.orderdata = this.searchOrderId.filter(
  //       this.orderdata === this.searchOrderId
  //     );
  //   } else {
  //     this.orderdata.getOrders().subscribe((orderdata: boolean) => {
  //       this.isadd = orderdata;
  //     });
  //   }
  // }
  // searchOrderId: string[] = []; // change the type to string array

  // searchOrder(): void {
  //   if (this.searchOrderId.length > 0) {
  //     this.orderdata = this.orderdata.filter((item: { orderId: string[][] }) =>
  //       item.orderId.includes(this.searchOrderId)
  //     );
  //   } else {
  //     this.orderdata.getOrders().subscribe((orderdata: boolean) => {
  //       this.isadd = orderdata;
  //     });
  //   }
  // }
  // ngOnInit() {
  //   this.getAllorders();
  // }

  getorder:order[]=[];
  ngOnInit() {
    let result: any
    this.service.getAll().subscribe(data => {
      result = data;
      this.getorder = result;
    })}

  nav(id: any) {
    localStorage.setItem('myid', id);
    console.log(localStorage.getItem('myid'));
    
    this.route.navigate(['view-orders-info'], id);
  }
}
