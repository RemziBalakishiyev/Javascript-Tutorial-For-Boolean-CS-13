console.log("loops")

// let index = 1;
// while(index < 6){
//     console.log(`Tekrarlanan kod! - ${index}`)

//     index++;//6
// }

// let numberOne = 1203;// 10 = 120.3
// let count = 0;
// while(numberOne > 0){
//     console.log(`number one = ${numberOne}`)
//     numberOne = Math.floor(numberOne / 10); // 120 / 10 = 0
//     count++;
//     console.log(`Count = ${count}`)
// }



// for(let index=0;index<5;index++){
//     console.log(`index = ${index}`)
// }

// // 0-dan 10-a qeder ededin cemini hesablayan proqram yazin!
// let sum = 0;
// for(let i=0; i<=10; i++){
//     console.log(i)//4
//     sum+=i ;// sum = 0 + 1 -> sum=1 + 2 -> sum = 3 + 3 -> 6 + 4 = 10
//     // console.log(`sum : ${sum}`)
// }


// 5- den 20-e qeder 5 ve ya 3 bolunen  ededlerin cemini tapan  proqram tertib edin!
// let evenSum = 0;
// for (let index = 5; index <= 20 ; index++) {
//         // 6 % 2 == 0
//     if(index % 5 == 0 || index%3==0){
//         evenSum+=index;
//     }
// }
// console.log(`Sum of result : ${evenSum}`)

// let cars = ["BMW","MERCEDES","TOYOTA","AUDI","BUGATTI"];
// // for(let i = 0; i < cars.length; i++){
// //     console.log(`Car -- ${cars[i]}`) // cars[0]
// // }

// for (const car of cars) {
//     console.log(`car - ${car}`)
// }

// cars.forEach((car)=>{
//     console.log(car)
// })

// console.log(cars)

let books = ["1984","Atomic habbit","Harry Potter","Tongue fu"];

for (const book of books) {
    if(book =="Atomic habbit" ){
        // console.log(`You find ${book}!`)
        continue;
    }
    console.log(book)
}



// let initialLength = 0;
// while(initialLength<books.length){
//     console.log(books[initialLength])
//     if(initialLength == 3){
//         console.log("Loops stopped!")
//         break;
//     }
//     initialLength++
// }


