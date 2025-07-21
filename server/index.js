const express = require('express');
const app = express();
const routes = require('./routes');

app.use(express.json()); // <-- cần để parse body JSON
app.use(routes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
