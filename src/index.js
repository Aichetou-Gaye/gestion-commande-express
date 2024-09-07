import express from "express";
import bodyParser from "body-parser";
import { Customer, Order, OrderDetail, Product } from "./gestionCommande.js";

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  console.log("Hello World");
});

app.post("/gestion", (req, res) => {
  const c1 = new Customer();
  c1.createCustomer({
    name: "Aicha",
    email: "aicha@gmail.com",
    number: "42356778",
  });
  console.log(`Welcome ${c1.name}`);

  const c2 = new Customer();
  c2.createCustomer({
    name: "Mariame",
    email: "mari@gmail.com",
    number: "42356778",
  });
  console.log(`Welcome ${c2.name}`);

  const p1 = new Product();
  p1.createProduct({ name: "Dresses", category: "Clothes" });
  console.log(`The product is ${p1.name}`);

  const p2 = new Product();
  p2.createProduct({ name: "Lose Powder", category: "Makeup" });
  console.log(`The product is ${p2.name}`);

  const d1 = new OrderDetail({
    quantity: 7,
    price: p1.price,
    product: p1,
  });
  console.log(`The product's detail is and quantity is ${d1.quantity}`);

  const d2 = new OrderDetail({
    quantity: 5,
    price: p2.price,
    product: p2,
  });
  console.log(`The product's detail is  and quantity is ${d2.quantity}`);

  const order = new Order();
  order.createOrder({
    date: new Date(),
    amount: 24000.0,
    customer: c1,
    details: [d1, d2],
  });

  let status = 200
  let msg = order

  if(!order) {
    msg = "Not found error"
    status = 400
  }

  res.status(status).json(msg)
//   res.send(`Already Up to date`);
});

// app.put("/customers/:id", (req, res) => {
//     // declaration du modele
//     const customer = new Customer();
//     customer.loadDataFromDB({name: "Mariame", email: "mari@gmail.com", number:"42356778" });
//     console.log(`old id is ${customer.id}`);

//     customer.editCustomer({ name: "Harouna", email: "hr@gmail.com", number:"42356778" });
//     console.log(`current id is ${customer.id}`);
//     console.log(`Welcome ${customer.name}`);
//   });

app.listen(port, () => {
  console.log("Successfully connected");
});
