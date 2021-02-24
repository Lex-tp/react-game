const express = require('express');

const app = express();

const levels = [
    {
        line: [
            {frontImage: 'processor', titleCard: 'Processor', index: 0},
            {frontImage: 'audioCable', titleCard: 'Audio Cable', index: 1},
            {}
        ]
    },
    {
        line: [
            {},
            {},
            {}
        ]
    },
    {
        line: [
            {},
            {},
            {}
        ]
    }
];

app.get('/level_1', (req,res)=>{
   console.log('Refreshed');
   return res.json(levels);
});

app.listen(3001, (error)=>{
    if(error) {
        throw Error(error);
    }
    console.log('Server started');
});