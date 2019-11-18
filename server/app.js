const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

require("dotenv").config();

mongoose.connect(process.env.MONGOHQ_URL, {useNewUrlParser: true});
mongoose.connection.once("open", () => {
  console.log("Conneted to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
