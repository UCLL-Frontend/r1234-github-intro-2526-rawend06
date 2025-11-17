let x = 10;
console.log(x);

let kwadraat = x*x;
console.log(kwadraat);

const tekst = "hallo";

const waarheid = true;
let y  = 11;
console.log(x == y);
console.log(x>y);

let tien = "10";
console.log(x === tien);

console.log("appel" < "Appel")

if(x%2 === 0) console.log("even")
    else{console.log("oneven");}

let result = x% 2 === 0 ? "even" : "oneven";

let a = 3 , b = 4;
console.log(a ===3 || b ===0);
console.log(a<10 && b>0);

let woord1="help";
let woord2="mij";
let woord = woord1 + " " + woord2;
let woordAnders = `${woord1}${woord2}`;
console.log(woordAnders);

//static int SubmitEvent(int a,int b){
  //  return a+b;
//}

function som(a,b)
{
return a+b;
}
console.log(`De sim van 4 en 5 is: ${som('4,5')}`)
console.log(`Woorden samenvoeg: ${som("alfa","beta")}`)

const som2 = (a,b) => {return a + b;}

const som3 = (a,b) => a + b;

let som = 0;
for (let i = 100; i<=120; i += 5){
    som += i;
    console.log(i);
}

let somWhile = 0;
let iWhile = 100;
while (iWhile <= 120){
    somWhile += iWhile;
    iWhile += 5;
}