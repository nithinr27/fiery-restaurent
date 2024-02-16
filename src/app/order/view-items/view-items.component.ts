import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-view-items',
  standalone: true,
  imports: [FormsModule,
  CommonModule,
HttpClientModule,
RouterLink,
RouterOutlet],
  templateUrl: './view-items.component.html',
  styleUrl: './view-items.component.css'
})
export class ViewItemsComponent {
  constructor(private http: HttpClient){
    this.get();
  }

  itemdata: any = [];
  itemdel: any = [];
  isadd: boolean = false;
  isupdate: boolean = false;
  postJson() {
    this.http
      .post('http://localhost:3000/Items', this.jdata)
      .subscribe((res) => {
        console.log('Data saved successfully:', res);
        this.isupdate = false;
      });
  }
  getAllitems() {
    this.http.get('http://localhost:3000/Items').subscribe((res) => {
      this.itemdata = res;
    });
  }

  get() {
    this.http.get('http://localhost:3000/Items').subscribe((res) => {
      this.itemdel = res;
    });
  }
  check() {
    this.isadd = true;
  }
  jdata = {
    item_no: '',
    name: '',
    quantity: '',
    price: '',
    
  };

}
