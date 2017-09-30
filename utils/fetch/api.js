const app = require('express')()


// app.set()
app.get('/get', (req, res) => {
    res.send({

    })
})

app.use('/put', (req, res) => {
    console.log(req.method)
    if(req.method ==='OPTIONS'){
        var headers = {}; 
        // headers["Access-Control-Allow-Origin"] ="*"; 
        // headers["Access-Control-Allow-Methods"] ="POST，GET，PUT，DELETE，OPTIONS"; 
        // headers["Access-Control-Allow-Credentials"] = false; 
        // headers["Access-Control-Max-Age"] ='86400'; // 24 hours 
        // headers["Access-Control-Allow-Headers"] ="X请求，X-HTTP方法覆盖，内容类型，接受"; 
        // res.writeHead(200,headers); 
        // res.setHeader("Access-Control-Allow-Origin", request.getHeader("origin"));
        res.setHeader("Access-Control-Allow-Headers", "Authorization, X-Request-With, Content-Type, If-None-Match, Access-Control-Allow-Headers, Content-Type,Powered-By");
        res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
        res.setHeader("Access-Control-Allow-Credentials", "true");
        res.setHeader("Content-Type", "application/json;charset=utf-8");
        res.setHeader("Access-Control-Max-Age", "0");
        res.set('Access-Control-Allow-Origin', '*')
        // res.set('Access-Control-Allow-Methods', 'POST,GET,PUT,DELETE,OPTIONS')
        // res.set('Access-Control-Allow-Origin', '*')
        // res.set('Access-Control-Allow-Origin', '*')
        // res.set('Access-Control-Allow-Origin', '*')
        res.sendStatus(200)
        return true
    }else{
        // res.set(200, {
        //         // "Content-Type": "text/html; charset=UTF-8",
        //         "Access-Control-Allow-Origin": '*'/*,
        //               'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
        //               'Access-Control-Allow-Headers': 'X-Requested-With, Content-Type'*/
        //     })
        res.set('Access-Control-Allow-Origin', '*')
        // res.set('X-Request-With', null)
        res.send('1111')
    }
    
})

app.listen(3000)