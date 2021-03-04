import level from './level/index.js';

import express from "express";


const app = express();

app.get('/', (req, res) =>{
    res.json([]);
});

app.get('/game',level);

app.listen(3002, (error) => {
    if (error) {
        throw Error(error);
    }
    console.log('Server started');
});
