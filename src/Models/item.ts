export class item {
  item_no: String = '';
  name: String = '';
  quantity: string = '0';
  Price: string = '0';

  constructor(item_no: String, name: string, quantity: string, price: string) {
    this.item_no = item_no;
    this.name = name;
    this.quantity = quantity;
    this.Price = price;
  }
}
