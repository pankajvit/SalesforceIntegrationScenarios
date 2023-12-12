public class CalloutToSalesforceOrg {
    public static void getAccounts(String industry){
        Http http = new Http();
        Httprequest request = new Httprequest();
        request.setEndpoint('callout:SFDCB/services/apexrest/accountmgmt/?industry=' + EncodingUtil.urlEncode(industry, 'UTF-8'));
        request.setMethod('GET');
        Httpresponse response = http.send(request);
        
        system.debug('response :'+response.getBody());
        system.debug('response status :'+response.getStatusCode());
        
        if(response.getStatusCode() == 200){
            Map<String,Object> results = (Map<String,Object>)JSON.deserializeUntyped(response.getBody());
            for(Object obj : results.values()){
                Map<String,Object> accountRecord = (Map<String,Object>) obj;
                System.debug(accountRecord.get('Industry'));
            }
        }else{
            System.debug('Error in integration ' +response.getBody());
        }
    }
}