import { QUOTES } from "./quotes";
import express from 'express';
import cors from 'cors';

const PORT = 3000;
const app = express();

const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    return QUOTES[randomIndex];
}

app.use(cors());

app.get('/random/', (_, res) => {
    res.send(getRandomQuote());
})

app.listen(PORT, () => {
    console.log('App is active!');
})