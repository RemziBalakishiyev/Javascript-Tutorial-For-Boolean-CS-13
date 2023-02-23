let signInBtn = document.querySelector(".btn , .btn-warning")
let recognizeBtn = document.querySelector("#recognize")
let characeterSpan = document.querySelector("#passwordHelpInline");
let passwordInput = document.querySelector("#inputPassword");
let characeterLengthInput = document.querySelector("#characterLength");



const showAlert = function(){
    alert("Hello!")
}
// signInBtn.addEventListener("click",showAlert);



const changeCharacterInSpan = function(){
    characeterSpan.innerHTML = "Sign button Clicked!";
}
//  signInBtn.addEventListener("click",changeCharacterInSpan);


function generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
    let password = "";
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }
    return password;
}


const getCharacterLenght = function(){
    if(!characeterLengthInput.value){
        alert("Eded daxil edin");
        return;
    }else if(characeterLengthInput.value<=5 || characeterLengthInput.value>=10 ){
        alert("Eded 5-10 arasi olmalidi");
        return;
    }

    return characeterLengthInput.value;
}


const checkPasswordLength = function(){
    if(passwordInput.value.length>5){
       showFunny();
    }else{
        showSad();
    }
}
const recognizePassword = function(){
    const length = getCharacterLenght();
    passwordInput.value = generatePassword(length);
    checkPasswordLength();
}




recognizeBtn.addEventListener("click",recognizePassword);
let sadSpan = document.getElementById("sad")
let funnySpan = document.getElementById("funny")

const showFunny =  ()=>{
    if(sadSpan.classList.contains("show")){
        sadSpan.classList.remove("show")
        sadSpan.classList.add("hide");
        funnySpan.classList.remove("hide");
        funnySpan.classList.add("show");
    }
}


const showSad = ()=>{
    if(funnySpan.classList.contains("show")){
        funnySpan.classList.remove("show")
        funnySpan.classList.add("hide");
        sadSpan.classList.remove("hide");
        sadSpan.classList.add("show");
    }
}


passwordInput.addEventListener("keydown",checkPasswordLength);





