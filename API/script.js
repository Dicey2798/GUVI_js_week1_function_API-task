//1. create an instance xml http  
var request=new XMLHttpRequest();
//2.create a connection// open a connection
request.open('GET','https://restcountries.eu/rest/v2/all',true);
//3.send the request
request.send();
//4. Load the response this function is triggered only when the data is retrived
request.onload=function(){
    var data=JSON.parse(this.response);
    for(var ele in data){
        try{
        var name = data[ele].name
        var long= data[ele].latlng
        if(long.length=== 0)throw new Error("Longititude not Found")
        wd(name ,...long);
        } catch(e){
            console.log("Details Not Found" +" "+name+ " " + e.Message);
        }
    }
}

//1. create an instance xml http  
function wd(name, lat, long) {
    var request = new XMLHttpRequest();
    //2.create a connection// open a connection
    var url = 'https://api.openweathermap.org/data/2.5/weather?lat=' + lat + '&lon=' + long + '&appid=66ff42beca1669655ead42886efc5955&units=metric';
    request.open('GET', url, true);
    //3.send the request
    request.send();
    //4. Load the response this function is triggered only when the data is retrived
    request.onload = function () {
        var data1 = JSON.parse(this.response);
        console.log(`${(name)}:${(data1.main.temp)}`);
    };
}

