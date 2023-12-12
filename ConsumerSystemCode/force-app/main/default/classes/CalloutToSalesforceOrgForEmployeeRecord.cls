public with sharing class CalloutToSalesforceOrgForEmployeeRecord {
    public static void getEmployee(String EmployeeId){
        Http http = new Http();
        Httprequest request = new Httprequest();
        request.setEndpoint('callout:SFDCB/services/apexrest/employeemgmt/?EmployeeId=' + EncodingUtil.urlEncode(EmployeeId, 'UTF-8'));
        request.setMethod('GET');
        Httpresponse response = http.send(request);
        
        system.debug('response :'+response.getBody());
        system.debug('response status :'+response.getStatusCode());
        
        if(response.getStatusCode() == 200){
            system.debug('response :'+response.getBody());
            /*Map<String,Object> results = (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
            for(Object obj : results.values()){
                Map<String,Object> accountRecord = (Map<String,Object>) obj;
                System.debug(accountRecord.get('Industry'));
            }*/
        }else{
            System.debug('Error in integration ' +response.getBody());
        }
    }
}