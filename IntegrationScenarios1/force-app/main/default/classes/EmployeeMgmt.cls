@RestResource(urlMapping='/employeemgmt/')
global class EmployeeMgmt {
    @httpGet
    global static Employee__c getEmployee(){
        Map<String, String> paramsMap = RestContext.request.params;
        String empId = paramsMap.get('Name');
        List<Employee__c> empList = [Select Id, Name, First_Name__c, Last_Name__c, Full_Name__c, Designation__c, Department__c 
                                        from Employee__c
                                        Where Name = :empId];
        return empList[0];
    }
}