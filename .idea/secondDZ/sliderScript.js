export default class sliderScript extends HTMLElement {
    get slides(){
        return [...this.children]; //обыяный массив html эл-ов [...this.query]
    }

    getNextSlide(){
        const currentScroll = this.scrollLeft;
        return this.slides.find((slide) => slide.offsetLeft > currentScroll);
    }
    isTrackFinish(){
        return(
            Math.ceil(this.scrollLeft + this.offsetWidth) >= this.scrollWidth - 1
        );
    }
    isTrackStart(){
        return this.scrollLeft <= 1;
    }
    getNextSlideWidth(){
        const nextSlide = this.getNextSlide();

        if(nextSlide){
            return nextSlide.offsetLeft - this.scrollLeft;
        }
        return 0;
    }

    getPrevSlide(){
        const currentScroll = this.scrollLeft;
        return [...this.slides]

            .reverse()          //разворачиваем массив
            .find((slide) => slide.offsetLeft < currentScroll);
    }

    getPrevSlideWidth(){
        const prevSlide = this.getPrevSlide();
        if(prevSlide){
            return this.scrollLeft - prevSlide.offsetLeft;
        }
        return 0;
    }
    scrollByAmount(amount) {
        this.scrollBy({left: amount, behavior: "smooth"})//обращаемся к тэгу через this
    }

    scrollToNext() {
        this.scrollByAmount(this.getNextSlideWidth());
    }

    scrollToPrev() {
        this.scrollByAmount(-this.getPrevSlideWidth());
    }
}

customElements.define('container-slider-track', sliderScript);