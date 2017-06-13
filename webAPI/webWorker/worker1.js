/**
 * Created by nick on 17-6-13.
 */

self.onmessage = function(event){
    console.log("accept message")
    var data = event.data;
    data.sort(function(a,b){
        return a-b
    });
    self.postMessage(data);

}

self.onerror = function(event){
    console.log("error in worker")
}
