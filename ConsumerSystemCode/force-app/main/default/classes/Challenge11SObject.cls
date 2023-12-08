public with sharing class Challenge11SObject {
    	// Create a new Account with name “WingNut Films” and Rating “Warm”.
	    // Create a new Opportunity “Lord of the Rings” for this account with below field values
	    // Stage > Qualification
	    // Closed Date > Today
	    // Update Account Name to “New Line Cinema”
	    // Update Opportunity State to “Closed-Won”
	    // Delete the Opportunity
	    // Undelete the opportunity

    public static void challenge11WithoutGeneraticObject(){
        Account acc = new Account();
        acc.Name = 'WingNut Films';
        acc.Rating = 'Warm';
        Opportunity opp = new Opportunity();
        opp.Name = 'Lord of the Rings';
        opp.StageName = 'Qualification';
        opp.CloseDate = new Date().Today();
    }
}