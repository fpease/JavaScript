function circle(){
    var a= prompt("Enter a number");
    var pie=3.14;
    var area= Number(pie) * Number(a) * Number(a);
    alert("The area of the circle is: " + Number(area));
}

function triangle(){
    var a= prompt("Enter the base");
    var b= prompt("Enter the height");
    var half=0.5;
    var area= Number(half) * Number(a) * Number(b);
    alert("The area of the triangle is: " + Number(area));
}

function largest(){
    var a= prompt("Enter number 1");
    var b= prompt("Enter number 2");
    var c= prompt("Enter number 3");
    if((a>b)&&(a>c)){
        alert("Number one is the largest number " + a);
    }
    else if((b>a)&&(b>c)){
        alert("Number two is the largest number " + b);
    } 
    else{
        alert("Number three is the largest number " + c);
    }
}

function evenodd(){
    var a= prompt("Enter a number");
    if(a%2 == 0){
    alert("Number is even");
    }
    else{
        alert("Number is odd");
    }
}

function posneg(){
    var a= prompt("Enter a number");
    if(a>0){
        alert("The number is positive");
    }
    else{
        alert("The number is Negative");
    }
}