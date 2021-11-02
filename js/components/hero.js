import { 
    getElement,
    getElements,
    increaseNumberInList
} from '../utils';

const Hero = (selector) => {

    const timeOut = 6000;
    const heroItemSelector = 'hero-item';
    const heroActiveItemSelector = 'hero-item--active';
    const carouselDom = getElement(document, selector);
    const carouselItemsDom = getElements(carouselDom, heroItemSelector);

    const state = {
        currentFrame: 0,
        numberOfItems: carouselItemsDom.length,
        get frameNumber() {
            this.currentFrame = increaseNumberInList(this.currentFrame, this.numberOfItems);
            return this.currentFrame;
        }
    };  

    const switchFrame = () => {
        const newFrame = state.frameNumber;
        const oldActive = getElement(carouselDom, heroActiveItemSelector);
        oldActive.classList.remove(heroActiveItemSelector);
        carouselItemsDom[newFrame].classList.add(heroActiveItemSelector);
    }

    const start = () => window.setInterval(switchFrame, timeOut);

    return { start };
}

export default Hero;