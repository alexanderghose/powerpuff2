
class Enemy { // declaring a class
    constructor(thickness, color) {
        this.health = 100;
        let enemy = document.createElement('img');
        enemy.src="mojo.png";
        enemy.style.width="10%";
        enemy.id='mojo';
        enemy.style.position="absolute";
        enemy.style.border=thickness + "px solid " + color;
        enemy.innerHTML="Mojo";

        //will fail:
        //enemy.addEventListener('click',this.clicked);

         // will succeed
        this.boundClicked = evt => this.clicked(evt);
        enemy.addEventListener('click',this.boundClicked);

        this.dom_element = enemy;
        this.lastX = window.innerWidth/2;
        this.lastY = window.innerHeight/2;
        let body = document.querySelector('body');
        body.appendChild(this.dom_element);
        this.move();
    }

    clicked() {
        this.health = this.health - 10;
        alert("Ahhh! You got me! My health is now " + this.health);
    }

    move() {
        this.dom_element.style.left=this.get_new_X() + 'px';
        this.dom_element.style.top=this.get_new_Y() + 'px';
        console.log("move called");
    }

    get_new_X() {
        let movement = (Math.random()*100)-50;
        this.lastX = Math.min(Math.max(0,this.lastX + movement),window.innerWidth);
        return this.lastX;
    }

    get_new_Y() {
        let movement = (Math.random()*100)-50;
        this.lastY = Math.min(Math.max(0,this.lastY + movement),window.innerHeight);
        return this.lastY;
    }
}

class HealthyEnemy extends Enemy { // inheritance
    constructor() {
        super("4","red");
        this.health = 200;
    }
}

let enemy1 = new Enemy("1","green"); // instantiate a class
let enemy2 = new HealthyEnemy() // instantiating a child

function render() {
    enemy1.move();
    enemy2.move();
    setTimeout(render,500);
}

render();