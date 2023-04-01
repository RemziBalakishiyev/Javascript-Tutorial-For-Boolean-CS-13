const qSel = function (selector) {
    return document.querySelector(selector);
  };
  
  const qSelAll = function (selector) {
    return document.querySelectorAll(selector);
  };
  const byClass = function (selector) {
    return document.getElementsByClassName(selector);
  };
  
  const byId = function (selector) {
    return document.getElementById(selector);
  };
  
  const validationMessage = [
    {
      id: 1,
      message: 'Şifrə ən az 5 simvoldan ibarət olmalıdır',
    },
    {
      id: 2,
      message: 'Şifrə daxilində ən az bir rəqəm olmalıdır',
    },
    {
      id: 3,
      message: 'Şifrə daxilində ən az bir böyük hərf olmalıdır',
    },
  ];

let btn = byId('checkBtn');
let inp = byId('checkInp');
let lbl = byId('resulLabel');
let valLength = byId('valLength');
let valNmb = byId('valDigit');
let valUpp = byId('valUpperWords');
let frm = byId('content_sect');



const checkLength = text => text.length >= 5;


const checkHasNumber = function(text){
 
    let textFromInput = '';
    for (let index = 0; index < text.length; index++) {
      textFromInput =   text.charAt(index)
      if(!isNaN(textFromInput)){
        return true
      }
    }
    
    return false;

}   

const checkHasUpperWord = function(text){
  let textFromInput = '';
  let index = 0;

  while(text.length > index){
    textFromInput = text.charAt(index);

    let upperTextWord = textFromInput.toUpperCase();

    if(textFromInput  == upperTextWord && isNaN(textFromInput)){
      return true;
    }
    index++
  }

  return false
}


const createdSpan = function(text){
  let span = document.createElement('span');
  span.classList.add('text-danger','mt-3','custom--span');
  span.style.display = 'inline-block';
  span.innerHTML = text;
  return span
}

const removeSpan = ()=>{
  if(qSel('.custom--span')){
    qSelAll('.custom--span').forEach(sp=>{
      sp.remove();
    })
  }
}

btn.addEventListener('click',function(){
    removeSpan();
    if(!checkLength(inp.value)){
        frm.appendChild(createdSpan(validationMessage[0].message));
    }

    if(!checkHasNumber(inp.value)){
        frm.appendChild(createdSpan(validationMessage[1].message));
        
    }

    if(!checkHasUpperWord(inp.value)){
      frm.appendChild(createdSpan(validationMessage[2].message));
    }
})