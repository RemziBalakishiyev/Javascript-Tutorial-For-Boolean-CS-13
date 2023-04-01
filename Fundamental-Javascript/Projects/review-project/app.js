const information = [
    {
      img: 'bruce.jpg',
      fullName: 'Bruce Wayne',
      job: 'Software Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
      color: '#0a9396',
      quoteColor: '#57cfd1',
    },
    {
      img: 'john.jpg',
      fullName: 'John Wick',
      job: 'Backend Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
      color: '#ee9b00',
      quoteColor: '#ecb755',
    },
    {
      img: 'walter.jpg',
      fullName: 'Walter White',
      job: 'Front-end Developer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia sunt labore et, voluptate commodi sint optio cumque. Amet ipsum obcaecati molestias unde velit asperiores dicta ea nam ullam. Enim, sequi.',
      color: '#001219',
      quoteColor: '#041a22',
    },
  ];
  
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
  
  let cardimg = byId('empImg');
  let cardJob = byId('job');
  let cardFullName = byId('fullName');
  let skill = byId('skill');
  let showButton = byId('btnShow');
  let nextBtn = byClass('fa-angle-right');
  let previousBtn = byClass('fa-angle-left');
  let bgImg = byClass('bg-img');
  let quoete = byClass('fa-quote-left');
  let slideBtn = qSelAll('.card-slider i');

let currentIndex=0;

  const changeSlide = function({img,fullName,job,description,color,quoteColor}){
        cardimg.setAttribute('src',`../img/${img}`);
        cardFullName.innerHTML = fullName;
        cardJob.innerHTML = job;
        skill.innerHTML = description
        bgImg[0].style.backgroundColor = color;
        quoete[0].style.backgroundColor = quoteColor;
        showButton.style.backgroundColor = color;

        slideBtn.forEach(btn=>{
            btn.style.color = color;
        })
  }


const walkInfo = function(index){
    changeSlide(
        information[index]
     );
}
  const operationButton = function(){
    nextBtn[0].addEventListener('click',()=>{
        if(currentIndex == information.length - 1){
            currentIndex = 0;
        }else{
            currentIndex++;
        }
       walkInfo(currentIndex);
    })

    previousBtn[0].addEventListener("click",()=>{
      if(currentIndex <=0){
        currentIndex = information.length -1
      }else{
        currentIndex--;
      }
      walkInfo(currentIndex);
    })
  }


  operationButton();