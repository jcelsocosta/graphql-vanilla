import express from 'express';
import { createHandler } from 'graphql-http/lib/use/http';
import { schema } from './schema';

// Create the GraphQL over HTTP Node request handler

// Create a HTTP server using the listner on `/graphql`
const app = express();
app.post('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000');