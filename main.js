function myFunction(num){

    if(num == '+' || num == '/' || num == '*' || num == '-' ){
        assignNo1(num);
        document.getElementById("inp").value ='';
    }
    else{
        document.getElementById("inp").value += num;
    }
}

let no1 ;
let no2 ;
let op ;

function assignNo1(math){
    
    no1 = document.getElementById("inp").value;
    op = math;
    document.getElementById("inp2").value = no1 + op;
}

function calculation(){
    
    no2 = document.getElementById("inp").value;
    cal(no1, op, no2);
 }

function cal(n1, o, n2){

    let number1 = n1/1;
    let number2 = n2/1;
    let result;  
    if(o == '+'){
       result = number1 + number2;
    }
    if(o == '-'){
        result = number1 - number2;
     }
     if(o == '*'){
        result = number1 * number2;
     }
     if(o == '/'){
        result = number1 / number2;
     }
    document.getElementById("inp").value = result;
    document.getElementById("inp2").value += n2;
}

function reset(){
    document.getElementById("inp").value ='';
    document.getElementById("inp2").value ='';
}






