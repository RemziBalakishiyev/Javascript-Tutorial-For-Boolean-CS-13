// Arrays  
//Array-in elementləri index-lər vasitəsilə sıralanır və biz array-in elemenlərinə götürmək üçün bu index-lərdən istifadə edirik

let numberOne = 12;
let numberTwo = 13;

let numbers = [12,13,14,15,16]; //Number array
let movies = ["Godfather","American Psycho","The Silence of Lambs","The Dark Knight","The Revenant","Pulp Fiction"]


let actors = ["Marlon Brando","Al Pachino","Christian Bale","Anthony Hopkins","Heath Ledger"]
// console.log(numbers);
// console.log(movies)

// console.log(movies[6])


// console.log(`${movies[1]} filmin baş rol aktyoru ${actors[2]} -dir`)
                            2
// let moviesByIndex = +prompt("Neçə nömrəli film haqqında məlumat almaq istəyirsiniz");
 let moviesByIndex=2;
                         //If                           
console.log(`${moviesByIndex>movies.length ? "Siyahida olmayan":movies[moviesByIndex-1]} filmini seçdiniz!`)


if(moviesByIndex===1){
    console.log(`${movies[0]} filmin baş rol aktyoru ${actors[1]} və ${actors[0]} -dir`)
}else if(moviesByIndex===2){
    console.log(`${movies[1]} filmin baş rol aktyoru ${actors[2]} və -dir`)
}else if(moviesByIndex===3){
    console.log(`${movies[2]} filmin baş rol aktyoru ${actors[3]} və -dir`)
}else{
    console.log("Siyahıda bu film mövcud deyildir");
}


// console.log(actors)
// console.log(actors.length)
// console.log(actors.shift())//Shift function-u array-in ilk elementini silir ve hemin elementin deyerini bizə qaytarır
 console.log(actors.pop())//En son elementi silir ve sildiyi elementin deyerini bize geri qaytarir
// console.log(actors)
// console.log(movies)


// console.log(movies.unshift("Fight Club"))// Unshift metodu array-in evveline elementleri daxil etmeyimize komek olur ve yeni yaranar arrayin uzunlu
// console.log(movies)

// console.log(actors.indexOf("Anthony Hopkins"))
// console.log(actors.push("Brad Pit"))
// console.log(actors)

// console.log(actors.reverse().shift())
// console.log(actors.sort())
// console.log(numbers.sort())

// console.log(actors.includes("Marlon Brando"))

// let movieName = prompt("Silmek istədiyiniz filmin adini daxil edin")





