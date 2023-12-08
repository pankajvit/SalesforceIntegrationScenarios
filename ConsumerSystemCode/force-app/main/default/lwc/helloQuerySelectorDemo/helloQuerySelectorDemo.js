import { LightningElement } from 'lwc';

export default class HelloQuerySelectorDemo extends LightningElement {
    users = ["John","Smith","Nik","Mike"];
    fetchDetailHandler(){
        const elem = this.template.querySelector('h1');
        elem.style.border = "1px solid red";
        console.log(elem.innerText);
        const userList = this.template.querySelectorAll('.name');
        Array.from(userList).forEach(function(item){
            console.log(item.innerText);
            item.setAttribute("title", item.innerText);
        });
        // lwc:manual demo
        const childElem = this.template.querySelector('.child');
        childElem.innerHTML = '<p>Hey I am a child element.</p>';

    }
}