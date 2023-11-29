public class LinkedinIntegration {
    public static void loginToLinkedIn(){
        Http http = new Http();
        Httprequest request = new Httprequest();
        request.setMethod('GET');
        request.setEndpoint('callout:LinkedIn/v2/me');
        
        Httpresponse response = http.send(request);
        
        System.debug('response '+ response.getBody());
        System.debug('response '+ response.getStatusCode());
        
    }
}