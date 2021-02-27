import firstLevel from './level-1/index.js';
import express from "express";


const app = express();

app.use(express.static('server'));

app.get('/', (req, res) =>{
    res.json([]);
});

app.get('/level-1',firstLevel);

app.listen(3002, (error) => {
    if (error) {
        throw Error(error);
    }
    console.log('Server started');
});