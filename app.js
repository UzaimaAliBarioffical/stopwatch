
// var min =0;
// var sec =0;
// var msec=0;
// var htmlmin=document.getElementById("min")
// var htmlsec=document.getElementById("sec")
// var htmlmsec=document.getElementById("msec")
// var Interval;
// function getStart(){
// Interval = setInterval(()=>{

//     msec++
//     htmlmsec.innerHTML=msec
// if(msec>=100){
//     sec++
//     htmlsec.innerHTML=sec
//     msec=0;

// }else if(sec>=60){
//     min++
// htmlmin.innerHTML=min
// sec=0;
// }
// let disablebutton=document.getElementById("Start").disabled=true
// },10)}
// function getStop(){
//     clearInterval(Interval);
//     let disablebutton=document.getElementById("Start").disabled=false;
// }
// function getRest(){
//     var min =0;
// var sec =0;
// var msec=0;
// htmlmin.innerHTML=min;
// htmlsec.innerHTML=sec;
// htmlmsec.innerHTML=msec;

// let disablebutton=document.getElementById("Start").disabled=false

// }



var min = 0;
var sec = 0;
var milisec = 0;
var minHeading = document.getElementById("min"); 
var secHeading = document.getElementById("sec"); 
var milisecHeading = document.getElementById("milisec"); 
var interval;
function timer(){
    milisec++
    milisecHeading.innerHTML = milisec;
    if(milisec >= 100){
        sec++
        secHeading.innerHTML = sec;
        milisec = 0;
    }else if(sec >= 60){
        min++
        minHeading.innerHTML = min;
        sec = 0;
    }
}
function start(){
    interval = setInterval(timer,10);
}
function pause(){
    clearInterval(interval);
}
function reset(){
    min = 0;
    sec = 0;
    milisec = 0;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    milisecHeading.innerHTML = milisec;
    pause();
}