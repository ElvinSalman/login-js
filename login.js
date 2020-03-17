'use strict'


let pas=document.getElementById("password");
let eye=document.getElementById("eye");
let eyesl=document.getElementById("eye-slash");
let lvl=document.getElementById("lvl");


function Eye(){
    eye.style.display="none";
    eyesl.style.display="block";
    pas.style.webkitTextSecurity="none";
}

function EyeSlash(){
    eye.style.display="block";
    eyesl.style.display="none";
    pas.style.webkitTextSecurity="disc";
}

function Level(){

    let pasvalue=pas.value;

    for(let i=0;i<pasvalue.length;i++){
        if( (pasvalue.length>6 && (pasvalue[i]=="#" || pasvalue[i]=="$" || pasvalue[i]=="@" )) || pasvalue.length>10){
            lvl.innerHTML="excelent password" ; 
            lvl.style.color="green";
          
        }
        else{
            if(pasvalue.length>6){
            lvl.innerHTML="good password" ; 
            lvl.style.color="yellow";      
           } else{
            lvl.innerHTML="bad password"  
            lvl.style.color="red";   
           }    
        }



        if(pasvalue[i]==" " || pasvalue[i+1]==" " ||pasvalue[i]==""){
            lvl.innerHTML="*** write password ***"
            lvl.style.color="red"; 
        }
    
    }
   
}





//Seconds

let sec=document.getElementById("sec-inp");

let sec_in_day=86400,
sec_in_hour=3600,
sec_in_minute=60;

let d_span=document.getElementById("day-span");
let h_span=document.getElementById('hour-span');
let m_span=document.getElementById('minute-span');
let s_span=document.getElementById('second-span');


function Sec() {

let secValue=sec.value;
if(sec.value!=0){
sec.value--;
}


//day
    if( Math.floor(secValue/sec_in_day) == 0 ) {
        d_span.innerHTML="0";
    }else{
        d_span.innerHTML=Math.floor(secValue/sec_in_day);
    }

//hour

let day_ot=secValue%sec_in_day;
 
if( Math.floor(day_ot/sec_in_hour) == 0 ){
h_span.innerHTML="0";
} else {
h_span.innerHTML=Math.floor(day_ot/sec_in_hour);
}



//minute

let hour_ot=day_ot%sec_in_hour;

if( Math.floor(hour_ot/sec_in_minute)==0){
    m_span.innerHTML="0"
}else{
    m_span.innerHTML=Math.floor(hour_ot/sec_in_minute);
}


//second

let minute_ot=hour_ot%sec_in_minute;

if(Math.floor(minute_ot)=="0"){
    s_span.innerHTML="0"
}else{
    s_span.innerHTML=Math.floor(minute_ot);
}




}




let intervalID;

function Start() { 
    // sec.value="";
    if( s_span.innerHTML != '0' ) {
        document.getElementsByClassName('div-sec')[0].style.display = 'none';
    }
    
    intervalID=setInterval(Sec,1000);
}

function Pause() {
    clearInterval(intervalID);
}



