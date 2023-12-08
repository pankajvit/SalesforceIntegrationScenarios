import { LightningElement, wire, track } from 'lwc';
import getAccountList from '@salesforce/apex/datatableController.getAccountList';

export default class LightningMapExample extends LightningElement {
    @track mapMarkers;

    @wire(getAccountList)
    wiredData({ error, data }) {
      if (data) {
        console.log('Data \n', data);
        data.forEach(account => {
            let mapObj = {
                location:{
                    City: account.ShippingCity,
                    Country: account.ShippingCountry,
                    PostalCode: account.ShippingPostalCode,
                    State: account.ShippingState,
                    Street: account.ShippingStreet
                },
                value: account.Name,
                title: account.Name,
                description: account.Description,
                icon: 'standard:account'
            }
            if(!this.mapMarkers){
                this.mapMarkers =[];
            }
            this.mapMarkers.push(mapObj)
        });
      } else if (error) {
        console.error('Error:', error);
      }
    }

    handleMarkerSelect(event){
        alert(event.target.selectedMarkerValue);
    }
}