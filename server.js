const express = require('express')
const app = express()
app.use(express.static('./dist/procanciones2'));
app.get('/*', function(req,res){
    res.sednFile('index.html', {root: 'dist/procanciones2/'}
    );
});
const port = 3500
app.listen(process.env.PORT || 3500), () => {
    console.log(`Escuchando a http://localhost:${port}`)
}