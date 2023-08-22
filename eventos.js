const div = document.getElementById("myDiv");


div.addEventListener("click", function(event) {
    alert("Hola! Soy el div");
    event.stopPropagation(); 
});

const bttn = document.getElementById("bttnS");

bttn.addEventListener("click", function(event) {
    alert("Hola!");
    event.stopPropagation(); 
});