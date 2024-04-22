/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  document
    .querySelector("#generateExcuse")
    .addEventListener("click", function() {
      document.querySelector("#excuse").innerHTML = upload();
    });

  let who = ["El hada madrina", "El dragón", "El demogorgon", "Mi gato"];
  let action = ["borró", "desintegró", "fulminó"];
  let what = ["mi código", "mi vida", "mi pastel de manzana"];
  let when = ["ayer", "el lunes", "el mes pasado"];
  let whoImage = {
    "El hada madrina":
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgS4CdulrMq3iaNREwr_7R8g5TOkOTOCBQIRXS2h7HZzLuvtC1Ib2M5X9h7D3QBtkE4fLJ0va66RuoAJMIcvxfGsc_vtFdeEtWoB8jJBqfSegoddPhhMaaUrcWrnXwOHPbDjjzWU6ww6ZA/s16000/transparent-png-shrek-Hada-Madrina-characters-download+%25281%2529.png",
    "El dragón":
      "https://static.wikia.nocookie.net/heroe/images/2/2c/Spyro_sin_fondo_CTRumble_promo_render.PNG/revision/latest/scale-to-width-down/1000?cb=20240112074335&path-prefix=es",
    "El demogorgon":
      "https://static.wikia.nocookie.net/green-stripes-adventures/images/7/78/Demogorgon_Stranger_Things.png/revision/latest?cb=20201008181108",
    "Mi gato":
      "https://png.pngtree.com/png-vector/20240327/ourmid/pngtree-cute-black-and-white-cat-attack-png-image_12230875.png"
  };

  function upload() {
    let whoRandom = Math.floor(Math.random() * who.length);
    let actionRandom = Math.floor(Math.random() * action.length);
    let whatRandom = Math.floor(Math.random() * what.length);
    let whenRandom = Math.floor(Math.random() * when.length);

    let excuse = [
      who[whoRandom] +
        " " +
        action[actionRandom] +
        " " +
        what[whatRandom] +
        " " +
        when[whenRandom] +
        "."
    ];
    let image = whoImage[who[whoRandom]];

    document.querySelector("#image").src = image ? image : "";
    return excuse;
  }
};
