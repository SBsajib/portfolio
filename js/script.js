

var typed = new Typed(".typing",{
    strings: [ "Web Designer" , " Web Developer" ,],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
   
});


var typed = new Typed(".typing-2",{
    strings: [ "Web Designer" , " Web Developer" ,],
    typeSpeed: 150,
    backSpeed: 150,
    loop:true
   
});






let number = document.getElementById("html_number");
let counter = 0;
setInterval(() => {
      if(counter == 90){
        clearInterval();
      }else{
        
    counter += 1;
    number.innerHTML = counter + "%";
      }

},35);








