function doStuff() {
    alert("aahh!")
}

let lastX = window.innerWidth/2;
let lastY = window.innerHeight/2;

function get_new_X() {
    console.log(window.innerWidth)
    let movement = (Math.random()*100)-50;
    lastX = Math.min(Math.max(0,lastX + movement),window.innerWidth);
    return lastX;
}

function get_new_Y() {
    let movement = (Math.random()*100)-50;
    lastY = Math.min(Math.max(0,lastY + movement),window.innerHeight);
    return lastY;
}   

function render() {
    let body = document.querySelector('body');
    while (body.lastChild) {
      body.removeChild(body.lastChild);
    }

    let enemy1 = document.createElement('img');
    enemy1.src="mojo.png";
    enemy1.style.width="10%";
    enemy1.id='mojo';
    enemy1.style.position="absolute";
    enemy1.style.border="1px solid red";
    enemy1.innerHTML="Mojo";
    enemy1.addEventListener('click',doStuff);
    enemy1.style.left=get_new_X() + 'px';
    enemy1.style.top=get_new_Y() + 'px';
    console.log("new_x:",enemy1.style.left);

    let enemy2 = document.createElement('img');
    enemy2.src="mojo.png";
    enemy2.style.width="10%";
    enemy2.id='mojo';
    enemy2.style.position="absolute";
    enemy2.style.border="1px solid red";
    enemy2.innerHTML="Mojo";
    enemy2.addEventListener('click',doStuff);
    enemy2.style.left=get_new_X() + 'px';
    enemy2.style.top=get_new_Y() + 'px';
    console.log("new_x:",enemy2.style.left);

    body.appendChild(enemy1);
    body.appendChild(enemy2);
    setTimeout(render,500);
}

render();