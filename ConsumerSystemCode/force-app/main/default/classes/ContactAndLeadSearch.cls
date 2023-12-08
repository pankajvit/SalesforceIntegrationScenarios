Public Class ContactAndLeadSearch
{
        Public static List<List<sObject>> searchContactsAndLeads(String searchword)
        {
            list<list<sObject>> sobjects = [find :searchword IN ALL FIELDS Returning lead(FirstName, LastName), contact(firstname, lastname)];
        
        	return sobjects;
        }
}