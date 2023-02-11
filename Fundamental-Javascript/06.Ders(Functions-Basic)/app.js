
// DRY - Don`t repaet yourself!
let age = calcAge(2000);
salaryApply(age);
calcAge(2004); 
//Function Decleration

function calcAge(dateOfBirth){
    if(!isCheckNumber(dateOfBirth)){
            console.log("Yaş dəyəri ədəd olmalıdır")
            return;
    }
    let currenDate = 2023;
    if(dateOfBirth>currenDate){
        console.error("Doğum tarixi cari ildən böyük ola bilməz!")
        return;
    }
    let age =  currenDate - dateOfBirth;
    console.log(`Age is ${age}`);
    return age;
}

function isCheckNumber(anyNumber){
    if(isNaN(anyNumber)){
        console.log("Xahis edirik eded daxil edesiniz!")
        return false;
    }
    return true
}


function salaryApply(age){
    if(!isCheckNumber(age)){
        console.log("Yas deyeri teyin olunmayib")
        return;
    }
    age>=18 
        ? console.log("Bu şəxsə maaş təyin ediləcək")
        : console.log("Təəssüfki 18 yaşına çatmamış şəxslər üçün maaş təyin edilə bilməz")
} 



//Function expression
const fullName = function(firstName,lastName){
    console.log(`${firstName} ${lastName}`);
}


const sum =function (a,b){
    
}

fullName("Remzi","Balakishiyev");
fullName("Nicat","Hasanov");
fullName("Walter","White");

const sum2 =(a,b)=> a+b;



console.log(sum2(12,13))







