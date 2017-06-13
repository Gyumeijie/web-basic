var express = require('express');
var router = express.Router();
var urllib = require('url');
var fs = require('fs');

router.get('/jsonp', function(req, res, next){

     console.log('get /jsonp')
     //var data = {name : "YuMeiJie", age:22};
     var maliciousCode = "(function(){alert('you computer is attacted!');})()"
     var params = urllib.parse(req.url,true);
     
     //jsonp request.
     if (params.query && params.query.callback){
     
        // var result = params.query.callback + '(' + JSON.stringify(data) + ')'
        // res.send(result);
        res.send(maliciousCode);
     }else{ //normal json requst.
        
         var result =  JSON.stringify(data);
         res.send(result);
     }

})

router.get('/', function(req, res, next){
    console.log('get index.html')
    fs.createReadStream('../index.html').pipe(res);

});

var app = express()
            .use('/', router)
            .listen(3000)
