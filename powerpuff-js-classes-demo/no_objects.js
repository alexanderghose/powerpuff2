function doStuff() {
    alert("aahh!")
}

let lastX = window.innerWidth/2;
let lastY = window.innerHeight/2;

function get_new_X() {
    console.log(window.innerWidth)
    let movement = (Math.random()*200);
    lastX = lastX + get_sign() * movement;
    return lastX;
}

function get_new_Y() {
    let movement = (Math.random()*200);
    lastY = lastY + get_sign() * movement;
    return lastY;
}   

function get_sign() {
    if (Math.floor(Math.random() * 2) == 1) {
        return +1
    } else {
        return -1;
    }
}

function render() {
    let body = document.querySelector('body');

    // remove all dom elements
    while (body.lastChild) {
      body.removeChild(body.lastChild);
    }

    // re-create enemy 1 in the dom
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

    // re-create enemy 2 in the dom
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