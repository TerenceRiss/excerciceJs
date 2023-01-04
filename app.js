var a=1;
var b=2;

console.log("------------avant inversion------------------");
console.log("A : "+a);
console.log("B : "+b);

var tmp= a;
a=b;
b=tmp;

console.log("--------------Apres inversion----------------");
console.log("A : "+a);
console.log("B : "+b);

console.log("--------------Exercice 2---------------------");

let prenom = 'toto';
console.log(prenom);
let age = '30';
console.log(age);
let homme =(true);
console.log(homme);

console.log("--------------Exercice 3---------------------");



 
function addition(x, y) {
    if (typeof x !== "number" || typeof y !== "number") {
        return "Erreur : veuillez entrer deux nombres!";
    }
    return x + y;
}

console.log(addition(1,2));
console.log(addition(-2,-4));


console.log("--------------Exercice3-1--------------------");


function minuteToSecond(minutes) {
    return  minutes * 60;
  }

  console.log(minuteToSecond(4));
console.log(minuteToSecond(3));


console.log("--------------Exercice4--------------------");

function increment(n) {
    return ++n;
  }

  console.log(increment(1));
console.log(increment(4));


console.log("--------------Exercice5--------------------");

function getSurface(base, hauteur) {
    return base * hauteur /2
  }

  console.log(getSurface(8, 2));
  console.log(getSurface(7, 3));

  console.log("--------------Exercice6--------------------");

  function strReverse(str) {

    return str.split("").reverse().join("");
  
  }
  
  console.log(strReverse("WayTolearnX"));
  console.log(strReverse("HelloWorld"));


  console.log("--------------Exercice7--------------------");


  function getMax(a, b, c) {
  
    max = 0;
    if (a > b){
      max = a;
    } 
    else{
      max = b;
    }
    if (c > max){
      max = c;
    }
    return max;
  }

  console.log(getMax(5, 9, 1));
  console.log(getMax(2, 3, 10));


  console.log("--------------Exercice8--------------------");

  function getFirst(tab) {
    
    return tab [0];
  }

  console.log (getFirst([1, 2, 3]));
  console.log (getFirst([50, 60, 70]));




  console.log("--------------Exercice9--------------------");



  console.log(document.URL);
  


  console.log("--------------Exercice10--------------------");


  function restDiv(a, b) {
    return a % b;
  }

  console.log(restDiv(1, 3));
  console.log(restDiv(2, 4));
  console.log(restDiv(3, 3));


  console.log("--------------Exercice11--------------------");

  function check(a, b) {
    
    return a + b < 100;

  }

  console.log(check(5, 20));
  console.log(check(60, 55));


  console.log("--------------Exercice12--------------------");

  function heureSeconde (heure) {
    
    return heure * 3600;

  }

  console.log(heureSeconde(1));
  console.log(heureSeconde(5));

  console.log("--------------Exercice13--------------------");

  function checkNbr (n) {

    return n <= 0;

  }


  console.log(checkNbr(1));
  console.log(checkNbr(-1));
  console.log(checkNbr(0));

  console.log("--------------Exercice14--------------------");

function isEqual(nbr1, nbr2){
    return nbr1==nbr2 
}

console.log(isEqual(3, 6));
console.log(isEqual(1, '1'));
console.log(isEqual(1, 1));


console.log("--------------Exercice15--------------------");

function isDivisible (n){
    
    return n % 5=== 0

}

console.log(isDivisible(5));
console.log(isDivisible(10));
console.log(isDivisible(6));


console.log("--------------Exercice16--------------------");

function hmTos(heure, minute) {

    return (heure * 3600 ) + (minute * 60 )
}

console.log(hmTos(1, 10));
console.log(hmTos(0, 59));
console.log(hmTos(0, 0));


console.log("--------------Exercice17--------------------");

function reverseTab(tab) {

    let res =[];
    for (let i = tab.length -1; i > -1; i--){
        res.push(tab[i]);
    }
    return res;
}

console.log(reverseTab([1, 2, 3, ]));
console.log(reverseTab([1, 1, 2, 2, 3]));

console.log("--------------Exercice18--------------------");


function getLastElem(tab) {
    return tab[tab.length - 1]
  }

console.log(getLastElem([1, 2, 3, 4]));
console.log(getLastElem(["Alex", "Bob", "Emily"]));

console.log("--------------Exercice19--------------------");

function checkEq(a, b) {

    return a === b
}

console.log(checkEq(5, 5));
console.log(checkEq(5, 0));
console.log(checkEq(5, false));
console.log(checkEq(5, "5"));



console.log("--------------Exercice20--------------------");

function isEmpty(str){


    return str.length == 0;
}

console.log(isEmpty("1"));
console.log(isEmpty("WayToLearnX"));
console.log(isEmpty("  "));
console.log(isEmpty(""));