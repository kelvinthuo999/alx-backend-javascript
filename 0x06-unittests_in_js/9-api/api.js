// api.js

const express = require('express');
const app = express();

app.get('/cart/:id', (req, res) => {
  // Validate that :id is a number using a regular expression
  const isValidId = /^\d+$/.test(req.params.id);

  if (!isValidId) {
    // If :id is not a number, return a 404 status code
    res.status(404).send("Cannot GET /cart/" + req.params.id);
  } else {
    // If :id is a number, return the expected response
    res.send(`Payment methods for cart ${req.params.id}`);
  }
});

const PORT = process.env.PORT || 7865;
app.listen(PORT, () => console.log(`API available on localhost port ${PORT}`));

