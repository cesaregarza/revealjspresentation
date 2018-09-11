Reveal.initialize();
Reveal.addEventListener('fragmentshown', function (event) {
  // event.fragment = the fragment DOM element
  $(event.fragment).children().addClass('show');
  setTimeout( ()=>{
    event.fragment.style.maxHeight = "100vh";
  }, 10);
});
Reveal.addEventListener('fragmenthidden', function (event) {
  // event.fragment = the fragment DOM element
  event.fragment.style.maxHeight = "0";
  setTimeout(()=>{   
      $(event.fragment).children().removeClass('show');
  },10);
});