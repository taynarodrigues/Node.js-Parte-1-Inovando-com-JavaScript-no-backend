const app = require('./src/app/config/custom-express');

app.listen(3000, function(){
    console.log(`Servidor rodando na porta 3000`);
});



// const http = require('http');

// const servidor = http.createServer(function(req, resp){
//     if(req.url == '/'){

//     }
    // resp.end(`
    //     <html>
    //         <head>
    //             <meta charset = "utf-8">
    //         </head>
    //         <body>
    //             <h1> Casa do Código </h1>
    //         </body>
    //     </html>
    // `);
// });
// servidor.listen(3000);


