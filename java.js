/*jshint esversion: 6*/

var view = (function(){
//    "use strict";

    

    document.getElementById("blondebag").onkeyup = function(e){
    	
        document.getElementById("blondebagtotal").innerHTML = "$" + document.getElementById("blondebag").value * 28
    }


document.getElementById("brunettebag").onkeyup = function(e){
    	
        document.getElementById("brunettebagtotal").innerHTML = "$" + document.getElementById("brunettebag").value * 28
    }

    
    document.getElementById('submit').onclick = function(e){
    	var result={blondebag:document.getElementById("blondebag").value, brunettebag: document.getElementById("brunettebag").value}
    	var method = "POST";
        var url = "https://hairslinky.herokuapp.com/api/email/";/*"http://localhost:3000/api/email/";*/
        var body = JSON.stringify(result);
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE){
                console.log(this.status)
                console.log("good")
            }
        };
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(body);
    }


    var view = {};



    return view;
    
}());