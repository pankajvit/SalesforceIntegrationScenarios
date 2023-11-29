public class ContactSearch {
    public static List<Contact> searchForContacts(string param1, string param2){
        return [SELECT Id, Name, LastName, MailingPostalCode FROM Contact Where (LastName =:param1 AND MailingPostalCode =:param2)];
    }
}