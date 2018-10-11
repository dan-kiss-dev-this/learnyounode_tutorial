let url = process.argv[2];
var http = require('http');

http.get(url, callback);
//the reponse below comes from the url, the response is passed as an argument for callback so you get callback(response) invoked next basically we are able to deal with asynchrony here in a non blocking way by doing this
function callback  (response) {
    response.on("data", callback2);
}
//the response (a node stream object) has a data property we wait for and then that can be manipulated by invoking next callback2(data_event)
function callback2(data_event){
    // console.log('data callback2',data_event.toString());
    console.log(data_event.toString());
}

