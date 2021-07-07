const express = require('express');
const ProjectRouter = require('./Projects/ProjectRouter');

const app = express();

app.use(express.json());

app.use('/', ProjectRouter);


const port = 5000;

app.listen(port, ()=>{console.log("listening on port: 5000")});