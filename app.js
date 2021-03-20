var http=require("http");
/**
 * response  响应
   request   请求

 */
http.createServer(function (req, res) {
    //  text/plain  当做文本块
    // response.writeHead(200,{'Content-Type':'text/plain'});
    // text/html 当做html输出
    // response.writeHead(200,{'Content-Type':'text/html'});
    // response.write("<h1>this is a test page!</h1>");
    // for(var i=0;i<10;i++){
    //     response.write("<p>hehe!</p>")
    // }
    if(req.method === "GET"){
        doGet(req,res);
    }else if(req.method === "POST"){
        doPost(req,res)
    }else{
        res.end();
    }


    // console.log(req);



    //发送并结束
    // response.end("Hello World\n");


}).listen(8081,"127.0.0.1");
function doGet(req,res){
    res.write('<html>');
    res.write("<head>");
    res.write("<title>");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form method='post'>");
    res.write('username:<input name="username"><br/>');
    res.write('password:<input name="password" type="password"><br/><input type="submit">' );
    res.write("</form>");
    res.write("</body>");
    res.end();
}
function doPost(req,res){
    res.write("success");
    res.end();
}
console.log("Server running at http://127.0.0.1:8081/")