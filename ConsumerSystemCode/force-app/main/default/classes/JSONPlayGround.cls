public with sharing class JSONPlayGround {
    public class Location {
        public String name;
        public String locality;
        public String region;
        public String metro;
        public String country;
        public String continent;
        public String street_address;
        public String address_line_2;
        public String postal_code;
        public String geo;
    }
    
    public class Company {
        public String name;
        public String size;
        public String id;
        public Integer founded;
        public String industry;
        public Location location;
        public String linkedin_url;
        public String linkedin_id;
        public String facebook_url;
        public String twitter_url;
        public String website;
    }
    
    public class Title {
        public String name;
        public String role;
        public String sub_role;
        public List<String> levels;
    }
    
    public class Experience {
        public Company company;
        public List<String> location_names;
        public String end_date;
        public String start_date;
        public Title title;
        public Boolean is_primary;
    }
    
    public class School {
        public String name;
        public String type;
        public String id;
        public Location location;
        public String linkedin_url;
        public String facebook_url;
        public String twitter_url;
        public String linkedin_id;
        public String website;
        public String domain;
    }
    
    public class Education {
        public School school;
        public String end_date;
        public String start_date;
        public Integer gpa;
        public List<String> degrees;
        public List<String> majors;
        public List<String> minors;
    }
    
    public class Profile {
        public String network;
        public String id;
        public String url;
        public String username;
    }
    
    public class VersionStatus {
        public String status;
        public List<String> contains;
        public String previous_version;
        public String current_version;
    }
    
    public class Data {
        public String id;
        public String full_name;
        public String first_name;
        // ... other fields from "data" object
        public List<Experience> experience;
        public List<Education> education;
        public List<Profile> profiles;
        public VersionStatus version_status;
    }
    
    public class RootObject {
        public Integer status;
        public Integer likelihood;
        public Data data;
        public String dataset_version;
    }

    public static void getJSONData(){
        String jsonString = '...'; // Your JSON string here
        RootObject root = (RootObject)JSON.deserialize(jsonString, RootObject.class);
    }
}