//getElementById para buscar Id en HTML
//addEventListener para una accion
//Al hacer click se realiza la accion
document.getElementById('Sprint').addEventListener('click', function() {
//Var es para crear variables
  //div es la variable
    var div = document.getElementById('animationDiv');
   //Quita la animacion
    div.classList.remove('animation2');
   //Añadir la animacion
    div.classList.add('animation1');
   
   });
   
   
   document.getElementById('Stop').addEventListener('click', function() {
   
    var div = document.getElementById('animationDiv');
     //Quita la animacion
    div.classList.remove('animation1');
   //Añadir la animacion
    div.classList.add('animation2');
   
   });

document.getElementById('Jump').addEventListener('click',function(){
    
    var div = document.getElementById('animationDiv');
    
    div.classList.add('Jumping');
//Se coloca un temporizador al salto
    setTimeout(function () {

        div.classList.remove('Jumping');
//Se elimina al pasar 1 segundo y se coloca la animacion anterior
      }, 1000);
    });

//QuerySelector es para CSS
//Buscara una variable en CSS
document.querySelector('#button1').addEventListener('click', function() {
//Al presionar el boton va a mandar una alerta
    alert('Entering Level 1: Icecap Zone');

});

document.querySelector('#button2').addEventListener('click', function() {
//Al presionar el boton va a mandar una alerta
    alert('Entering Level 2: Mushroom Hill Zone');

});

document.querySelector('#button3').addEventListener('click', function() {
//Al presionar el boton va a mandar una alerta
    alert('Entering Level 3: Aquatic Ruin Zone');

});
//Añadir variables para los sonidos y musicas de la pagina
const level1ost = document.getElementById("level1");
//Variable de la musica del nivel 1

const level1 = document.querySelector('#button1');
//Variable para detener la musica del nivel 1

level1.addEventListener("click", function () {
    level1ost.play();
  });//Musica reproduciendose del nivel 1

const level2ost = document.getElementById("level2");
//Variable de la musica del nivel 2

const level2 = document.querySelector('#button2');
//Variable para detener la musica del nivel 2

level2.addEventListener("click", function () {
    level2ost.play();//Musica reproduciendose del nivel 2
  });

const level3ost = document.getElementById("level3");
//Variable de la musica del nivel 3

const level3 = document.querySelector('#button3');
//Variable para detener la musica del nivel 3

level3.addEventListener("click", function () {
    level3ost.play();//Musica reproduciendose del nivel 3
  });

//Al hacer click en el nivel 1, la musica del nivel 3 se detiene
level1.addEventListener("click", function () {
    level3ost.pause();
});
//Al hacer click en el nivel 1, la musica del nivel 2 se detiene
level1.addEventListener("click", function () {
    level2ost.pause();
});
//Al hacer click en el nivel 2, la musica del nivel 1 se detiene
level2.addEventListener("click", function () {
    level1ost.pause();
});

//Al hacer click en el nivel 2, la musica del nivel 3 se detiene
level2.addEventListener("click", function () {
    level3ost.pause();
});

//Al hacer click en el nivel 3 la musica del nivel 1 se detiene
level3.addEventListener("click", function () {
    level1ost.pause();
});
//Al hacer click en el nivel 3, la musica del nivel 2 se detiene
level3.addEventListener("click", function () {
    level2ost.pause();
});
//Crear variables para el sonido del salto
//Al hacer click se reproduce el sonido
const jumpsnd = document.getElementById("jumpsnd");
//Variable del sonido de salto
//El iD esta en HTML con sonido
const jump = document.querySelector('#Jump');
//Variable para reproducir el sonido del salto
//El Selector esta en CSS para el boton
//La primera variable es para el sonido y la segunda variable es para el boton.

jump.addEventListener("click", function () {
    jumpsnd.play();
  });//Sonido de salto reproduciendose

//Crear variables para el sonido del corriendo
const sprintsnd = document.getElementById("sprintsnd");
//Variable del sonido de corriendo
//El iD esta en HTML con sonido
//La primera variable es para el sonido y la segunda variable es para el boton.

const sprint = document.querySelector('#Sprint');
//Variable para reproducir el sonido
//El Selector esta en CSS para el boton

sprint.addEventListener("click", function () {
    sprintsnd.play();//Sonido de corriendo reproduciendose
  });

//Crear variables para el sonido del detener
const stopsnd = document.getElementById("stopsnd");
//Variable del sonido de detenido
//El iD esta en HTML con sonido

const stop = document.querySelector('#Stop');
//Variable para reproducir el sonido
//El Selector esta en CSS para el boton
//La primera variable es para el sonido y la segunda variable es para el boton.

stop.addEventListener("click", function () {
    stopsnd.play();//Sonido de detenerse reproduciendose
  });