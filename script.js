const buttons1 = document.querySelectorAll('.bton1');
const buttons2 = document.querySelectorAll('.bton2');
const buttons3 = document.querySelectorAll('.bton3');
const video = document.getElementById('video');
const videoInfo = document.getElementById('video-info');
const menuButtons = document.querySelectorAll('.menu-boton');
const buttonContainers = document.querySelectorAll('.bton-cont');
const videoContainer = document.querySelector('.video-show');
const videoHide = document.querySelector('.video');


buttons1.forEach((button1, index) => {
    button1.addEventListener('click', () => {
        switch (index) {
            case 0:
                video.src = './assets/heros/hero1/1hoodwink_acorn_shot.webm';
                videoInfo.textContent = 'text 1.';
                break;
            case 1:
                video.src = './assets/heros/hero1/2hoodwink_bushwhack.webm';
                videoInfo.textContent = 'text 2.';
                break;
            case 2:
                video.src = './assets/heros/hero1/3hoodwink_scurry.webm';
                videoInfo.textContent = 'text 3.';
                break;
            case 3:
                video.src = './assets/heros/hero1/4hoodwink_sharpshooter.webm';
                videoInfo.textContent = 'text 4.';
                break;
            case 4:
                video.src = './assets/heros/hero1/5hoodwink_aghanims_shard.webm';
                videoInfo.textContent = 'text 5.';
                break;
            case 5:
                video.src = './assets/heros/hero1/6hoodwink_aghanims_scepter.webm';
                videoInfo.textContent = 'text 6.';
                break;
        }
    });
});
buttons2.forEach((button2, index) => {
    button2.addEventListener('click', () => {
        
        switch (index) {
            case 0:
                video.src = './assets/heros/hero2/1 pangolier_swashbuckle.webm';
                videoInfo.textContent = 'text 1.';
                break;
            case 1:
                video.src = './assets/heros/hero2/2 pangolier_shield_crash.webm';
                videoInfo.textContent = 'text 2.';
                break;
            case 2:
                video.src = './assets/heros/hero2/3 pangolier_lucky_shot.webm';
                videoInfo.textContent = 'text 3.';
                break;
            case 3:
                video.src = './assets/heros/hero2/4 pangolier_gyroshell.webm';
                videoInfo.textContent = 'text 4.';
                break;
            case 4:
                video.src = './assets/heros/hero2/5 pangolier_aghanims_shard.webm';
                videoInfo.textContent = 'text 5.';
                break;
            case 5:
                video.src = './assets/heros/hero2/6 pangolier_aghanims_scepter.webm';
                videoInfo.textContent = 'text 6.';
                break;
            
        }
    });
});
buttons3.forEach((button3, index) => {
    button3.addEventListener('click', () => {
        
        switch (index) {
            case 0:
                video.src = './assets/heros/hero3/1 rubick_telekinesis.webm';
                videoInfo.textContent = 'text 1.';
                break;
            case 1:
                video.src = './assets/heros/hero3/2 rubick_fade_bolt.webm';
                videoInfo.textContent = 'text 2.';
                break;
            case 2:
                video.src = './assets/heros/hero3/3 rubick_arcane_supremacy.webm';
                videoInfo.textContent = 'text 3.';
                break;
            case 3:
                video.src = './assets/heros/hero3/4 rubick_spell_steal.webm';
                videoInfo.textContent = 'text 4.';
                break;
            case 4:
                video.src = './assets/heros/hero3/5 rubick_aghanims_shard.webm';
                videoInfo.textContent = 'text 5.';
                break;
            case 5:
                video.src = './assets/heros/hero3/6 rubick_aghanims_scepter.webm';
                videoInfo.textContent = 'text 6.';
                break;
            
        }
    });
});
menuButtons.forEach((menuButton, index) => {
    menuButton.addEventListener('click', () => {
        // Oculta todos los menús
        buttonContainers.forEach(container => {
            container.style.display = 'none';
        });

        // Muestra el menú correspondiente al botón
        buttonContainers[index].style.display = 'flex';

        // Oculta el video al abrir el menú
        videoContainer.style.display = 'flex';
    });
});
video.addEventListener('click', () => {
    videoHide.style.display = 'hide';
});