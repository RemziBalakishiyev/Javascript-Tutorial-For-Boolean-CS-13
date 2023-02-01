


const log = console.log;
const a = 3;
const b = 2;
const c = 16;




// log(Math.pow(a,b))
// log(Math.sqrt(Math.pow(5,2)))
// log(Math.pow(c,1/3))


log(Math.round(125**(1/3)))



let numberOne = +"12"; // Verilmish number olmayan tipin yanina + ishersi atdiqda hemin deyeri number convert edirik

log(2+(+numberOne))
log(+false)


let numberTwo = 14;

log(numberTwo%5) // % isharesi ededin ede bolunmesinden alinanq qaligi gosterir




//Verilmiş ədədin cür və ya tək olmasını yoxlayan proqram yazın
// let includedNumber = +prompt("Ededi Daxil edin!");



// if(includedNumber===0){
//     log("Ədəd sıfırdır")
// }else if(includedNumber%2===0){
//     log("Bu eded cütdür!")
// }else{
//     log("Ədəd təkdir")
// }


//TODO: Warning!! Tapshiriq - 1
// Promptan gələn dəyəri qəbul edin həmin dəyər sıfıra bərabərdirsə ekrana "əməliyyat dayandı", həmin həm 2-ə həmdə 6 bölünürsə ekrana "Aktiv" əks halda "deaktiv mesajını çıxırsın"


let anyNumber = 13;
            //13
//  anyNumber = anyNumber+2;
    // ||
// anyNumber += 2;


anyNumber++;
// ||
anyNumber+=1;
// ||
anyNumber=anyNumber+1

log(anyNumber)


let historyClass = "h-13" // h-14,h-15

switch(historyClass){
    case "h-14":
        log("Class of history 14.")
    break;
    case "h-13":
        log("Class of history 13.")
    break;
    case "h-15":
         log("Class of history 15.")
    break;

    default:
        log("There isn`t that class");
    break;

}



// const operator = prompt("Əməliyyatı daxil edin !");
// let numberFive = 5;
// let numberFour = 4;

// let result;


// switch (operator) {
//     case "+":
//         result =  numberFive+numberFour;
//         break;
//     case "-":
//         result = numberFive-numberFour
//         break;

//     case "*":
//         result = numberFive*numberFour;
//         break;
        
//     case "/":
//         result = numberFive/numberFour
//         break;    
//     default:
//         result = "Bele bir operation mövcud deyildir"
//         break;
// }

// log(result)


let age  = 12;
let notificattion;

if(age>=20){
    notificattion ="You are Young"
}else{
    notificattion = "You are teenager"
}

age >=20 ? (notificattion="You are Young"):(notificattion="You are teenager");


notificattion =  age>=20 ? "You are Young":"You are teenager"
log(notificattion)