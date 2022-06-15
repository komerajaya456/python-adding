

function button3(){
    var number1=document.querySelector('#number');              //it should be inside to assing//
    var inputText1=document.querySelector('#input1').value;
    document.getElementById('number').innerHTML=parseInt(inputText1);
    console.log(inputText1+1);
    var inp=document.querySelector('#input1');
    var inpdis=inp.getAttribute('disabled');
    console.log(inpdis);
    
    }

 

function button2(){
    var number1=document.querySelector('#number').innerHTML;
    document.getElementById('number').innerHTML=(parseInt(number1)+1);
 
}
function button1(){
    var number1=document.getElementById('number').innerHTML;
    document.querySelector('#number').innerHTML=(parseInt(number1)-1);
}
