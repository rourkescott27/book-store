import express from 'express';
import mongoose from 'mongoose';

import { PORT, mongoDBURL } from './config.js';

const app = express();

app.get('/', (request, response) => {
    console.log(request);
    return response.status(234).send("Welcome to the Bookstore");
});

mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });