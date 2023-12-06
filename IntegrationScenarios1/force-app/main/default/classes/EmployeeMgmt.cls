@RestResource(urlMapping='/employeemgmt/')
global class EmployeeMgmt {
    @httpGet
    global static List<Employee__c> getEmployee(){
        List<Employee__c> empList = [Select Id, Name from Employee__c];
        return empList;
    }
}