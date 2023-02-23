

// Get element by id

//Elementlər dom vasitəsilə iki formada geri dönür tək element şəklində və çox elemen şəklindi

// document.getElementById("verilmish tag-in id-si daxil olunur");







// const setColorize = (backgroundColor,fontColor) => {
//     const bruceWayne = document.getElementById("bruceWayne");

//     bruceWayne.style.backgroundColor = `#${backgroundColor}`;
//     bruceWayne.style.color =`#${fontColor}`;
// }

// let backgroundColor = prompt("Enter your BackGround Color:");
// let color = prompt("Enter your color:");


// setColorize(backgroundColor,color);

//Aşağıda verilən kodu təkmilləşdirirsiniz. Təkrarlanan kodları aradan qaldırın və kodu dinamikləşdirin.

const walter = document.getElementsByClassName('card');
let wayneColor ="#ccd5ae"
let walterColor ="#219ebc"
let ledgerColor = "#6a994e"

for (const wl of walter) {

    console.log(wl.className)

    let classHeader ="custom--"
    if(wl.className.includes(`${classHeader}wayne`)){
        wl.style.backgroundColor =wayneColor;
    }else if(wl.className.includes(`${classHeader}white`)){
        wl.style.backgroundColor =walterColor;
    }else if(wl.className.includes(`${classHeader}ledger`)){  //custom--ledger
        wl.style.backgroundColor =ledgerColor;
    }
}


const container = document.getElementsByTagName("section");

console.log(container)

container[0].style.height = "600px"
container[0].style.borderRadius="40px"
container[0].style.border="2px solid black"
container[0].style.marginTop = "20px"