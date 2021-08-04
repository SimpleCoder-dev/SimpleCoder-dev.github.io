console.log('Hello World!');

var element = document.getElementById('btnExplore');
var all = document.getElementById('all');

element.addEventListener('click',() => {
  window.scrollTo(0,700);
  
});


all.addEventListener('click',() => {
  window.scrollTo(0,0);
});




