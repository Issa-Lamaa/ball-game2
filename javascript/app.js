let ball = document.getElementById("ball");
let win = document.getElementById("win");
let link = document.getElementsByTagName("link")[0];

function start() {
  for (let i = 0 ; i < 2 ; i++) {
    document.getElementsByClassName("remove")[i].style.display = 'none';
  }
  
  ball.style.display = 'block';
  document.getElementsByTagName("header")[0].style.display = 'block';
}

function clicked() {
  win.style.display = 'block';
  win.innerHTML = "VICTORY !";
  ball.innerHTML = 'yay!';  
}

function dark() {link.href = 'css/dark.css'}

function light() {link.href = 'css/style.css'}

function confirm() 
{ball.style.backgroundColor = document.getElementsByTagName("input")[0].value}

function diff(difficulty) {
  win.style.display = 'none';
  ball.innerHTML = 'de Ball';
  switch(difficulty) {
    case 'ez': 
      ball.style.animationDuration = '5s';
      ball.style.width = '120px';
      ball.style.height = '120px';
      ball.style.fontSize = "30px";
    break;
    case 'md':
      ball.style.animationDuration = '2s';
      ball.style.width = '100px';
      ball.style.height = '100px';
      ball.style.fontSize = "30px";
    break;
    case 'hd':
      ball.style.animationDuration = '1s';
      ball.style.width = '50px';
      ball.style.height = '50px';
      ball.style.fontSize = "8px";
    break;
  }
}