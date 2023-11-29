import { LightningElement } from 'lwc';

export default class CustomLightningCard extends LightningElement {
    handleSlotFooterChange(){
        const footerElem = this.template.querySelector('slds-hidden');
        if(footerElem){
            footerElem.classList.remove('slds-hidden');
        }  
    }
}