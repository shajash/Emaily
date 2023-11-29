const express = require('express'); //using commonjs module for require as nodejs doesn't have support for import express from 'express' which is es2015 type
const app = express();

//app - get, post, put, delete, patch

// route handler
// /- route
app.get('/', (req, res) => {
    res.send("hello world");
})

const PORT = process.env.PORT || 5000;

app.listen(PORT); //tells node to listen to something from port 5000