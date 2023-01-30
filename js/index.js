

  const canvas = document.getElementById("canvas");
  const ctx = canvas.getContext("2d");

window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  }

}
let roadMap
let car


function startGame() {
  roadMap = document.createElement("img");
  roadMap.src = "images/road.png"
  ctx.drawImage(roadMap, 0, 0, 400, 600);
  car = document.createElement("img");
  car.src = "images/car.png"
  ctx.drawImage(car, 225, 600, 50, 90);

  setInterval(() => {
    // console.log("setinterval");
    update();
  }, 20);
}

class carPlayer {
  constructor(x, velocidadx) {
    this.x = x;
    this.velocidadx = velocidadx;

  }
  print() {
    ctx.drawImage(car, this.x, 600, 50, 90);
  }

}







let player = new carPlayer(225, 20);

update = () => {
  ctx.clearRect(0, 0, 500, 700);
  ctx.drawImage(roadMap, 0, 0, 500, 700);
  player.print();
}




// document.body
document.getElementsByTagName("body")[0].addEventListener("keydown", (event) => {
  switch (event.key) {

    case "ArrowLeft":
      player.x -= player.velocidadx;
      if (player.x < 65) player.x = 65;
      break;
    case "ArrowRight":
      player.x += player.velocidadx;
      if (player.x > 385) player.x = 385;
      break;

  }
})









//(x, y, w, h);  //cuadrado solido


/* we are not going to edit anything from the classes, we need to print it 
// dont put print solo,
//before starting games you shold create the objects then when starting print the stuff#
we can put out the classes the keydown events
you need ctx in arguemnts anda also use it after
for the obstacle we want to print ()
put it inside onload as its before we are paitning
//set interval inside a class - also set interval for things that are autmatic