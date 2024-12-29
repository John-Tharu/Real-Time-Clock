setInterval(() =>{
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    //console.log(hour, minute, second);
    document.getElementById("date").innerHTML = hour + ":" + minute + ":" + second;
},1000);