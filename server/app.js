const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

const app = express();

mongoose.connect(process.env.MONGOHQ_URL);
mongoose.connection.once('open', () => {
    console.log('Conneted to database');
  });

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(4000, () => {
  console.log(`Listening at port ${process.env.PORT}`);
});
