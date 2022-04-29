const express       = require('express');
const serverless    = require('serverless-http');

const app = express();

const router = express.Router();

router.get('/', (req, res) => {
  res.json({
    'test': 'test123'
  })
});

// app.all('*', (req, res) => {
//     return res.status(404).send({
//         message: '404 page not found'
//     });
// });

app.use('./netlify/functions', router)

module.export.handler = serverless(app);
