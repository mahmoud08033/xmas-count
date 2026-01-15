let x =document.querySelector('#header');



window.addEventListener("scroll", () => {
    // يظهر الـ navbar
    x.style.transform = "translateY(0)";

    // إعادة ضبط المؤقت
    clearTimeout(timeout);

    // يختفي بعد ما تقف
    timeout = setTimeout(() => {
        x.style.transform = "translateY(-100%)";
    }, 800); // الوقت بالمللي ثانية
});



let n=document.querySelector('#menu');
let z = document.querySelector('.mark');
let y=document.querySelector('.wrong');



z.addEventListener('click', function ()  {
 
//   x.style.display ='block '  
  n.style.transform ='rotateY(0deg) '
  
  

    


})

y.addEventListener('click', function ()  {
    n.style.transform ='rotateY(90deg) '
    e.stopPropagation();

 
})