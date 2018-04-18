const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(`${ __dirname }/index.html`); // borrar uno de los parentesis ya que da problemas
});

app.listen(3000, function () {
  console.log(`Example app listening on port ${ this.address().port }`);
});
