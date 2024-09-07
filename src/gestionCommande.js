export class Customer {
  constructor() {}

  createCustomer(customer) {
    this.name = customer.name;
    this.email = customer.email;
    this.number = customer.number;
    console.log(
      `Customer : ${this.name}, ${this.email}, ${this.number} has been created`
    );
  }

  editCustomer(newCustomer) {
    this.name = newCustomer.name;
    this.email = newCustomer.email;
    this.number = newCustomer.number;
    console.log(
      `Customer : ${this.name}, ${this.email}, ${this.number} has been updated`
    );
  }

  getCustomer() {
    // console.log(
    //   `Customer : ${this.name}, ${this.email}, ${this.number}`
    // );

    return { name: this.name, email: this.email, number: this.number }
  }

  dropCustomer() {
    console.log(
      `Customer : ${this.name}, ${this.email}, ${this.number} has been deleted`
    );
  }
}

export class Product {
  constructor() {}

  createProduct(product) {
    this.name = product.name;
    this.category = product.category;
    console.log(
      `Product :  ${this.name}, ${this.category}  has been created`
    );
  }

  editProduct(newProduct) {
    this.name = newProduct.name;
    this.category = newProduct.category;
    console.log(
      `Product : ${this.name}, ${this.category}  has been updated`
    );
  }

  getProduct() {
    return { name: this.name, category: this.category }
  }

  dropProduct() {
    console.log(
      `Product : ${this.name}, ${this.category} has been deleted`
    );
  }
}

export class OrderDetail {
    constructor(quantity, price, product) {
      this.quantity = quantity
      this.price = price
      this.product = product
    }
  
  }

export class Order {
  constructor() {}

  createOrder(order) {
    this.date = order.date;
    this.amount = order.amount;
    this.customer = order.customer
    this.details = order.details
    console.log(
      `Order has been created`
    );
  }

  editOrder(newOrder) {
    this.date = newOrder.date;
    this.amount = newOrder.amount;
    this.customer = newOrder.customer
    this.details = newOrder.details
    console.log(
      `Order has been updated`
    );
  }

  getOrder() {
    return { date: this.date, amount: this.amount, customer : this.customer.name, details: this.details.length}
  }

  dropOrder() {
    console.log(
      `Order has been deleted`
    );
  }
}


//export Customer
