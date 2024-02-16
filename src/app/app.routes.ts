import { Routes } from '@angular/router';
import { ViewOrdersComponent } from './order/view-orders/view-orders.component';
import { AppComponent } from './app.component';
import { TexterComponent } from './texter/texter.component';
import { ItemsComponent } from './items/items.component';
import { ViewItemsComponent } from './order/view-items/view-items.component';
import { ViewOrdersInfoComponent } from './order/view-orders-info/view-orders-info.component';

export const routes: Routes = [
  { path: 'view-orders', component: ViewOrdersComponent },
  { path: '', component: TexterComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'view-items', component: ViewItemsComponent },
  { path: 'view-orders-info', component: ViewOrdersInfoComponent },
  { path: 'view-orders/view-orders-info', component: ViewOrdersInfoComponent },

  // { path: 'view-orders', component: ViewOrdersComponent },

  // { path: 'items', component: ItemsComponent },
  // { path: 'view-items', component: ViewItemsComponent },
  // { path: 'view-orders-info', component: ViewOrdersInfoComponent },
];
