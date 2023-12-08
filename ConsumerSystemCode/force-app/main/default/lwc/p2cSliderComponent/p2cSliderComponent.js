import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    val = 10;

    changeHandler(event){
        this.val = event.target.value;
    }

    @api reset(){
        this.val = 50;
    }
}