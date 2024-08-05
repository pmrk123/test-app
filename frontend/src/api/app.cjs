const express = require('express');
const { json, urlencoded } = express;
const router = require('./routes.js');
const errorHandler = require('./errorMiddleware.js');

const app = express();
const DEFAULT_PORT = 4000;
const port = process.env.PORT || DEFAULT_PORT;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use('/api/wasmd', router);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
