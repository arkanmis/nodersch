/**
 * Created by ARSYI on 01/02/18.
 */

/**
 * Created by ARSYI on 01/02/18.
 */
const express = require('express');
const app = express()

const middleWareSatu = (req, res, next) => {
    console.log('middleware pertama')
    next()
}

const middleWareDua = (req, res, next) => {
    console.log('middleware kedua')
    next()
}

app.use(middleWareSatu);
app.use(middleWareDua);

app.get('/', (request, response) => {
    response.send('hello hnoactive8');
})
app.listen(5443, () => {
    console.log("executed on 127.0.0.1");
})


