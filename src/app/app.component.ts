import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ViewOrdersComponent } from './order/view-orders/view-orders.component';
import { HttpClientModule } from '@angular/common/http';
import { TexterComponent } from './texter/texter.component';
import { ViewItemsComponent } from './order/view-items/view-items.component';
import { ViewOrdersInfoComponent } from './order/view-orders-info/view-orders-info.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent,
    ViewOrdersComponent,
    HttpClientModule,
    RouterLink,
    TexterComponent,
    ViewItemsComponent,
    ViewOrdersInfoComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'restaurent';
}
