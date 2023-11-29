import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {
    fullName = "Zero to Hero in LWC";
    title = "Aura";

    changeHandler(event){
        this.title = event.target.value;
    }

    @track
    address={
        city: 'Melbourne',
        postcode: 3008,
        country: 'Aurstralia'
    }

    trackHandler(event){
        // this is not good practice to mutate the object properites.
        // In this form, you need to use track property
        //this.address.city = event.target.value;

        // Instructor suggested below line for updating object properties,
        // in this form no need to use track property
        this.address = {...this.address, "city": event.target.value}
    }

    /** getter example */
    users = ["john","smith","nik"];

    num1 = 10;
    num2 = 20;

    get firstUser(){
        return this.users[0];
    }

    get multiply(){
        return this.num1 * this.num2;
    }
}