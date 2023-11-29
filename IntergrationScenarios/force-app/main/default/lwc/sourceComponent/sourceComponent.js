import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class SourceComponent extends NavigationMixin(LightningElement) {
    codeText;
    codeValue;

    handleClick(){
        let pageRef = {
            type: "standard__component",
            attribute: {
                componentName: "c__NavigateToLWC"
            },
            state: {
                c__codeNumber: '500',
                c__codeText: 'Status Code',
            }
        };

        this[NavigationMixin.Navigate](pageRef);
    }
}