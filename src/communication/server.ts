import express from 'express';
import { createHandler } from 'graphql-http/lib/use/http';
import { schema } from './schema';
import cors from 'cors'
import morgan from 'morgan'

// Create a HTTP server using the listner on `/graphql`
const options: cors.CorsOptions = {
    origin: '*',
    methods: ['GET', 'POST', 'DELETE', 'UPDATE', 'PUT', 'PATCH'],
    allowedHeaders: ['x-requested-with, content-type', 'authorization', 'origin', 'accept', 'x-access-token'],
    credentials: true,
    maxAge: 86400,
    preflightContinue: true
}


const app = express();

app.use(cors(options))
app.options('*', cors(options))
app.use(morgan('dev'))
app.post('/graphql', createHandler({ schema }));

app.listen({ port: 4000 });
console.log('Listening to port 4000 webhook');