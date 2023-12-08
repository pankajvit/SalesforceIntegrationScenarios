public class StringArrayTest {
    public static list<string> generateStringArray(Integer param){
        list<string> generatedString = new list<string>();
        for(Integer i=0;i<param;i++){
            generatedString.add('Test '+i);
        }
        return generatedString;
    }
}