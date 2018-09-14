require('dotenv').config();

const app = require('./api/app');
const port = process.env.API_PORT;

app.listen(port);
console.log(`API @ ${port}`);