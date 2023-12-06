// whenever user updates the phone number then 
// we have to populated in description field with the text "your phone no is update and new phone number is XXXXXX"
trigger accountTrg2 on Account (before update) {
    if(Trigger.isUpdate && Trigger.isBefore){
        for(Account acc : Trigger.new){
            if(acc.Phone != null && acc.Phone != Trigger.oldMap.get(acc.Id).Phone){
                acc.Description = 'your phone no is updated and old phone number is ' + Trigger.oldMap.get(acc.Id).Phone;
            }
        }
    }
}