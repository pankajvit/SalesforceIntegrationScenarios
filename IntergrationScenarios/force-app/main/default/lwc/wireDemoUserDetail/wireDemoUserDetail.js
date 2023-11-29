import { LightningElement, wire } from 'lwc';
import { getRecord } from 'lightning/uiRecordApi';
import Id from '@salesforce/user/Id';
import NAME_FIELD from '@salesforce/schema/User.Name';
import EMAIL_FIELD from '@salesforce/schema/User.Email';
const fields = [NAME_FIELD, EMAIL_FIELD];
export default class WireDemoUserDetail extends LightningElement {
    userId = Id;
    // 0055i000002QZV6AAO   

    // @wire(adapter, {adapterConfig})
    // propertyorfunction

    userDetail
    @wire(getRecord, {recordId: '$userId', fields})
    userDetailHandler({data, error}){
        // console.log(response);
        if(data){
            this.userDetail = data.fields;
        }
        if(error){
            console.log(error);
        }
        
    }

    @wire(getRecord, {recordId: '$userId', fields})
    userDetailProperty


}