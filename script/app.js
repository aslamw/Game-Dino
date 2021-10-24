const dino = document.querySelector('.dino');
const background = document.querySelector('.background')
let isjumping = false;
let position = 0;

function handlekeyUp(event){
	if (event.keyCode === 32){
		if(!isjumping){
			jump();
		}	
	}
}

function jump(){	
	isjumping = true;

	let upinterval = setInterval(() => {

			if (position >= 150){
				//Descer
				clearInterval(upinterval)

				let downinterval = setInterval(() => {
					if (position <= 0){
						clearInterval(downinterval)
						isjumping = false;
					}else{
						position -= 20;
						dino.style.bottom = position + 'px'
					}
				},20)

			}else{
				//subir
				position += 20;
				dino.style.bottom = position + 'px';
			}
		}, 20);
}

function createcactus() {
	const cactus = document.createElement('div');
	let cactusposition = 1000;
	let randomTime = Math.random() * 6000;

	cactus.classList.add('cactus');
	cactus.style.left = 1000 + 'px';
	background.appendChild(cactus);

	let leftinterval = setInterval(() => {

		if (cactusposition < -60) {
			clearInterval(leftinterval);
			background.removeChild(cactus);
		}else if(cactusposition > 0 && cactusposition < 60 && position < 60){
			clearInterval(leftinterval);
			document.body.innerHTML = '<h1 class="game-over">Fim do jogo</h1>'
		}else{
			cactusposition -= 10;
			cactus.style.left = cactusposition +'px'
		}
	},20);
	setTimeout(createcactus, randomTime);
}

createcactus();
document.addEventListener('keyup', handlekeyUp);