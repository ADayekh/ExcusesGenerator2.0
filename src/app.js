/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //Función auxiliar para obtener número al azar entre 0 y un máximo
  function getRandomInt(number){
    return Math.floor (Math.random()* number);
}
  function generator_excuse () {
    //Declaraciones de partes de la excusa
    let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
    let action = ['ate', 'peed', 'crushed', 'broke'];
    let what = ['my homework', 'my phone', 'the car'];
    let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];
    //Randomizador de partes usando función de enteros aleatorios
    let randomwho = who.[getRandomInt(4)];
    let randomnaction = action.[getRandomInt(4)];
    let randomwhat = what.[getRandomInt(4)];
    let randomwhen = when.[getRandomInt(4)];
    //Formador de excusa
    let excuse = randomwho + " " + randomnaction + " " + randomwhat + " " + randomwhen + ".";

    return excuse;
  } 
  document.getElementById("excuse").innerHTML = generator_excuse();
};
