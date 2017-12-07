const app = require('express');
app.get('/', (req, res) => {res.send('Hi, this is me.')});
app.listen(8000, function(){console.log('Listening on 8000');});
