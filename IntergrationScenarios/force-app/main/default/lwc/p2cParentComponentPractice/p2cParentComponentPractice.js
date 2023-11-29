import { LightningElement } from 'lwc';

export default class P2cParentComponentPractice extends LightningElement {
    crouselDetails = [
        {
            Id: 1,
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
            alternativetext : "First card accessible description."    
        },
        {
            Id: 2,
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternativetext : "Second card accessible description."
        },
        {
            Id: 3,
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternativetext : "Third card accessible description."
        }
    ];

    parcentVal=10;
    changeHandler(event){
        console.log('parent value'+this.parcentVal);
        this.parcentVal = event.target.value;
    }
}