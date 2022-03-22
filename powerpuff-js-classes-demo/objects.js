
class Enemy { // declaring a class
    constructor(borderThickness=1, borderColor="red") {
        this.health = 100;
        this.X = Math.floor(Math.random()*window.innerWidth);
        this.Y = Math.floor(Math.random()*window.innerHeight);
        this.dom_element = null;

        this.draw(borderThickness, borderColor);
        this.move();
    }

    draw = (borderThickness, borderColor) => {
        let body = document.querySelector('body');
        let enemy = document.createElement('img');
        enemy.src="mojo.png";
        enemy.style.width="10%";
        enemy.id='mojo';
        enemy.style.position="absolute";
        enemy.style.border=borderThickness + "px solid " + borderColor;
        enemy.innerHTML="Mojo";


        enemy.addEventListener('click', this.handleClicked);

         // will succeed
        // this.boundClicked = evt => this.clicked(evt);
        // enemy.addEventListener('click',this.boundClicked);

        this.dom_element = enemy;
        body.appendChild(this.dom_element);
    }

    handleClicked =() => {
        this.health = this.health - 10;
        alert("Ahhh! You got me! My health is now " + this.health);
    }

    move = () => {
        this.dom_element.style.left=this.get_new_X() + 'px';
        this.dom_element.style.top=this.get_new_Y() + 'px';
        console.log("move called");
        setTimeout(this.move,500)
    }

    get_sign() {
        if (Math.floor(Math.random() * 2) == 1) {
            return +1
        } else {
            return -1;
        }
    }

    get_new_X() {
        let movement = (Math.random()*200)-50;
        this.X = this.X + this.get_sign()*movement;
        return this.X;
    }

    get_new_Y() {
        let movement = (Math.random()*200)-50;
        this.Y = this.Y + this.get_sign()*movement;
        return this.Y;
    }
}

class HealthyEnemy extends Enemy { // inheritance
    constructor() {
        super("4","red");
        this.health = 200;
    }
}

// we could put all that is below into something like class Game {}
// but skipping for simplicity

let enemy1 = new Enemy("1","green"); // instantiate a class
let enemy2 = new HealthyEnemy() // instantiating a child
let enemies = []
for (let i = 0; i < 10; i++) {
    let randomEnemy = new Enemy(Math.floor(Math.random()*100));
    enemies.push(randomEnemy);
}