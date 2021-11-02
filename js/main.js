import Hero from './components/hero'

const main = () => {
    const hero = Hero('hero-carousel');
    hero.start();
}

document.addEventListener("DOMContentLoaded", main);