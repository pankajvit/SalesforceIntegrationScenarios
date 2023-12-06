public class removeDuplicateLead {
    public static void deleteDuplicateLead(){
        List<Lead> leadList=[SELECT Id, Email, Phone FROM Lead];
        removeDuplicateLead.execute(leadList);
    }
    public static void execute(List<Lead> scope) {
        Map<String, Lead> uniqueLeadsByEmail = new Map<String, Lead>();
        Map<String, Lead> uniqueLeadsByPhone = new Map<String, Lead>();

        for (Lead lead : scope) {
            if (lead.Email != null && !uniqueLeadsByEmail.containsKey(lead.Email)) {
                uniqueLeadsByEmail.put(lead.Email, lead);
            } else if (lead.Email != null) {
                Database.delete(lead);
            }

            if (lead.Phone != null && !uniqueLeadsByPhone.containsKey(lead.Phone)) {
                uniqueLeadsByPhone.put(lead.Phone, lead);
            } else if (lead.Phone != null) {
                Database.delete(lead);
            }
        }
    }
}