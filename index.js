const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

const port = 3001;
app.listen(port, () => {
    console.log(`localhost:${port}`);
});