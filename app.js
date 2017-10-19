conts express = require('express');
conts http = require('http');
conts path = require('path');

conts api = require('./server/routes/api');

conts app = express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) => {
    res.sendfile(path.join(__dirname, 'dist/index.html'));
    
});

conts port = process.env.PORT || '3001';
app.set('port', port);


conts server = http.createServer(app);
server.listen(port, ())=> console.log('running');