const express = require('express');
const app = express();
const router = express.Router();

const path = __dirname + '/views/';
const port = 4040;

router.use(function (req,res,next) {
  console.log('/' + req.method);
  next();
});

router.get('/',function(req,res){
  console.log({request: req})
  res.sendFile(path + 'index.html');
});

// For caching test
router.get('/cached', (req, res) => {
  console.log("REQUEST ON CACHED ENDPOINT")
  res.end(JSON.stringify(new Array(100).fill({title: 'hello'})));
})

router.get('/sharks',function(req,res){
  res.sendFile(path + 'sharks.html');
});

app.use(express.static(path));
app.use('/', router);

app.listen(port, function () {
  console.log('Example app listening on port 4040! change')
})
