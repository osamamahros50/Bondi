// Aos library
AOS.init();
// loadin Screen
window.addEventListener('load',function () {
    var semsm = document.querySelector('.semsm');
    this.setTimeout(()=>{
        semsm.classList.add('d-none')
    },2000)
})

// scroll top
let arrow = document.querySelector(".arrow");
window.onscroll =function () {
   if (this.scrollY >= 100) {
    arrow.style.opacity="1";
}else{
       arrow.style.opacity="0";

   }
}
arrow.onclick = function () {
    window.scrollTo(0, 0);
  };

//   Show lightContainer
let img = Array.from(document.querySelectorAll(".o img"));
let container = document.querySelector(".container-info");
let lightContainer =document.getElementById('lightContainer')
let close =document.getElementById('close')
let next =document.getElementById('next')
let prev =document.getElementById('prev')
let currentIndex;
for (let i = 0; i < img.length; i++) {
        img[i].addEventListener('click',function (e) {
            
            let currentSrc=e.target.getAttribute('src');
            container.style.backgroundImage=`url(${currentSrc})`
            currentIndex=img.indexOf(e.target)
            lightContainer.classList.remove('d-none')
            
        })    
    }
    close.addEventListener('click' , function () {
        
        lightContainer.classList.add('d-none')
    })
    next.addEventListener('click',function () {
        slide(1)
    })
    prev.addEventListener('click',function () {
        slide(-1)
        
    })
    function slide(step) {
        currentIndex +=  step;
        if (currentIndex>img.length-1) {
            currentIndex =0
        }
        if (currentIndex <0) {
            currentIndex=img.length-1;
        }
        var newSrc = img[currentIndex].getAttribute('src');
        container.style.backgroundImage=`url(${newSrc})`


}

