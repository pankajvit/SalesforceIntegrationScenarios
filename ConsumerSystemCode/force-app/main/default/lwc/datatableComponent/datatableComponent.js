import { LightningElement, wire } from 'lwc';
    import getContactList from '@salesforce/apex/datatableController.getContactList';


    const columns = [
        { label: 'Name', fieldName: 'recordUrl', type: 'url',
            typeAttributes : {
                label : {
                    fieldName: 'Name'
                },
                target: '_blank'
            },
            cellAttributes :{
                iconName: {
                    fieldName: 'contactIcon'
                },
                iconPosition: 'left',
                iconAlternativeText: 'Contact Icon'
            }
        },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' },
        { label: 'Title', fieldName: 'Title', type: 'text' },
        { label: 'Email', fieldName: 'Email', type: 'Email' },
        { label: 'AccountId', fieldName: 'AccountId', type: 'text' },
        { label: 'Account Name', fieldName: 'accountUrl', type: 'url',
            typeAttributes : {
                label : {
                    fieldName: 'ACCOUNT_NAME'
                },
            target: '_blank'
            },
            cellAttributes :{
                iconName: 'standard:account',
                iconPosition: 'right',
                iconAlternativeText: 'Account Icon'
            }
        },
    ];

    export default class DatatableComponent extends LightningElement {

        contactData;
        coulumList = columns;
        error;

        

        @wire(getContactList)
        wiredData({error, data}) {
            if(data){
                console.log('Data ', data);
                let parsedData = JSON.parse(JSON.stringify(data));
                let baseUrl = 'https://'+location.host+'/';
                parsedData.forEach(contact => {
                    //TODO : currentItem
                    if(contact.AccountId){
                        contact.ACCOUNT_NAME = contact.Account.Name;
                        contact.recordUrl    = baseUrl + contact.Id;
                        contact.accountUrl   = baseUrl + contact.AccountId;
                        contact.accountIcon  = 'standard:account';
                        contact.contactIcon  = 'standard:contact';
                    }
                });
                console.log('Modified Data \n', data);
                this.contactData = parsedData;
                this.error = undefined;
            }else if(error){
                console.error('Error: ', error);
                this.contactData = undefined;
                this.error = error;
            }
            
        }
    }