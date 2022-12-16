process.stdin.setEncoding("utf8");
const express = require("express");
const app = express();
const path = require("path");
const { MongoClient, ServerApiVersion } = require('mongodb');
const bodyParser = require("body-parser");
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('86baf7a1e15546578a459ce05ac1aae0');

require("dotenv").config({ path: path.resolve(__dirname, '.env') })

const username = process.env.USERNAME;
const password = process.env.PASSWORD;

const uri = `mongodb+srv://${username}:${password}@cluster0.8opdezr.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dbName = process.env.DB_NAME;
const dbCollection = process.env.COLLECTION;

async function getOrderHistory() {
  let orderTable =
    "<table class='table'><thead><tr><th>Name</th><th>Textbook</th><th>Email</th></tr></thead><tbody>";
  let cursor = client.db(dbName).collection(dbCollection).find();
  let results = await cursor.toArray();
  results.forEach(
    (result) =>
      (orderTable +=
        "<tr><td>" + result.name + "</td><td>" + result.books + "</td><td>" + result.email + "</td></tr>")
  );
  orderTable += "</tbody></table>";
  return orderTable
}

async function submitOrder(newOrder) {
  await client.db(dbName).collection(dbCollection).insertOne(newOrder);
}

newsapi.v2.topHeadlines({
  category: 'technology',
  language: 'en',
  country: 'us'
}).then(response => {
  console.log(response);
  /*
    {
      status: "ok",
      articles: [...]
    }
  */
});

// Set EJS View Engine
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(process.env.PORT || 3000, () => {
  console.log("Application running on PORT 3000");
});

try {
  client.connect();
  console.log("successfully connected");
} catch (e) {
  console.error(e); 
}

// Home Page
app.get("/", (req, res) => {
  res.render("home");
});

// Order Page
app.get("/order", async (req, res) => {
  res.render("order");
});

// Order History Page
app.get("/order-history", async (req, res) => {
  const orderTable = await getOrderHistory();
  // console.log(volumes);
  res.render("orderHistory", { orderTable: orderTable });
});

// Newsletters
app.get("/newsletterA", (req, res) => {
  res.render("newsletterA");
});

app.get("/newsletterB", (req, res) => {
  res.render("newsletterB");
});

app.post("/order", async (request, response) => {
  const newOrder = {
      name: request.body.name,
      email: request.body.email,
      books: request.body.books,
  };
  await submitOrder(newOrder);
  response.redirect("/order-history");
});

client.close();
