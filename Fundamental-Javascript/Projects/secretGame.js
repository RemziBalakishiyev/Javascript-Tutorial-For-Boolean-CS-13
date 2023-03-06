const log =  console.log;
let secretWords = ['bool', 'teach', 'js'];

const qSel = (selector)=>{
    if(typeof selector != 'string'){
        return;
    }
    return document.querySelector(selector);
}

const getById = (id)=>{
    if(typeof id != 'string'){
        return;
    }
    return document.getElementById(id);
}

const getByClassName = (className) =>{
    
    if(typeof id != 'string'){
        return;
    }
    return  document.getElementsByClassName(className)
}

const checkBtn = getById("checkBtn");
let secretInput = getById("scrtWord");
let score = getById("score");
let point = 0; 
let currentGameClasses = getById("pendingGame").classList;
let gameOverClasses = getById("gameOver").classList;
let victoryClasses = getById("victoryGame").classList;

let btnRestart = getById("restart");

const displayGameOver = function(){
    if(currentGameClasses.contains("show")){
        currentGameClasses.remove("show")
        currentGameClasses.add("hide")

        gameOverClasses.remove("hide")
        gameOverClasses.add("show")
    }
}

const displayVictory = function(){
    if(currentGameClasses.contains("show")){
        currentGameClasses.remove("show")
        currentGameClasses.add("hide")

        victoryClasses.remove("hide")
        victoryClasses.add("show")
    }
}

const clearInput = function(){
    secretInput.value = "";
    requiredInputText();
}

const victoryGame = function(){
    point += 10; 
    score.innerHTML = point.toString();

    if(secretWords.length == 0){
        debugger
        point > 0 ? displayVictory():displayGameOver()
    }
    clearInput()
}

const looseGame = function(){
    point -= 10; 
    score.innerHTML = point.toString();

    if(point <= -30 && point > -60){
        qSel("body").classList.remove("bg-light")
        qSel("body").classList.add("bg-warning")
    }else if(point <= -60){
        qSel("body").classList.add("bg-light")
        displayGameOver();
    }

    clearInput();
}


const removedWordFromArray = function(word,exampleArray){
    if(!exampleArray.includes(word)){
        log("Verilmiş array - de bele bir deyer yoxdur");
        return;
    }

    const removedIndex = exampleArray.indexOf(word);
    exampleArray.splice(removedIndex,1)
    log(exampleArray);
}




const checkSecretWord = function(text){
    let wordFromSecretWord = '';
    let stop = true;

    secretWords.forEach(word => {
       if(word == secretInput.value){
            stop = false;
            wordFromSecretWord = secretInput.value;
       }
    })

    if(!stop){
        removedWordFromArray(wordFromSecretWord,secretWords);
        victoryGame();
        return;
    }
    looseGame();
   
}

const requiredInputText = function(e){
    if(!secretInput.value){
        checkBtn.setAttribute("disabled","disabled");
        return;
    }
    checkBtn.removeAttribute("disabled","disabled")

    if(e.key == 'Enter'){
        checkSecretWord();
    }
}




requiredInputText()
secretInput.addEventListener('keyup',requiredInputText)
checkBtn.addEventListener("click",checkSecretWord)
btnRestart.addEventListener("click",()=>{
    window.location.reload();
})









