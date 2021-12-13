function ageVote(a)
{
    if (a>=18)
    {
        document.getElementById("result").innerHTML="Old enough to vote";
    }
    else{
        document.getElementById("result").innerHTML="Not old enough to vote";
    }
}

function areaCircle(c){
    var pie=3.14;
    var area= Number(pie) * Number(c) * Number(c);
    document.getElementById("answer").innerHTML="The area of the circle is: "+ Number(area);
}

function greater(a,b){
    if(a>b){
        document.getElementById("product").innerHTML="Number 1 is bigger: " + a;
    }
    else{
        document.getElementById("product").innerHTML="Number 2 is bigger: " + b;
    }
}

function evenOdd(a){
    if(a%2==0){
        document.getElementById("Product").innerHTML="The number is even";
    }
    else{
        document.getElementById("Product").innerHTML="The number is odd";
    }
}

function palindrome(str){
    var strArray= str.split("");
    var strArray2=strArray.reverse();
    var final= strArray2.join("");
    if (final==str){
        document.getElementById("Answer").innerHTML="The string " + str + " is a palindrome";
    }
    else{
        document.getElementById("Answer").innerHTML="The string " + str + " is not a palindrome";
    }
}