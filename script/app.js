const dino = document.querySelector('.dino');

function handkeyup(event){
	if (event.keyCode === 32){
		jump();
	}
}

document.addEventListener('keyup', handkeyup);

function jump(){
	let position = 0;

	let upinterval = setinterval(() => {
		position += 20

		dino.style.bottom = position + 'px'

	},20)

}