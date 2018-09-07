require('dotenv').config();
const app = require('./api/app');

const port = process.env.API_PORT || 5000;

app.listen(port);
console.log(`API @ ${port}`);