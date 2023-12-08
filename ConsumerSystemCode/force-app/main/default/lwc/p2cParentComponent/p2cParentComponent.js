import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    crouselDetails = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
            alternativetext : "First card accessible description."    
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternativetext : "Second card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternativetext : "Third card accessible description."
        }
    ];

    parValue = 10;

    changeHandler(event){
        this.parValue = event.target.value;
    }

    handleClick(){
        this.template.querySelector('c-p2c-slider-component').reset();
    }
}