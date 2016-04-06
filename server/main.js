import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Glossaries.findOne()){
        console.log("creating sample glossaries");
        Glossaries.insert(
        [
           {
           	title: "Terms for business meetings",
        	source_language: "English",
        	target_language: "French",
        	subject: "business terminology",
        	source_term: "business meeting",
        	target_term: "réunion d'affaires",
        	comment: "",
        	author: "author1"
    	   },
    	   {
    	   	title: "Tourism",
        	source_language: "English",
        	target_language: "Spanish",
        	subject: "tourism",
        	source_term: "travel agency",
        	target_term: "agencia de viajes",
        	comment: "",
        	author: "author2"
    	   },
    	   {
    	   	title: "Terms for business meetings",
        	source_language: "English",
        	target_language: "French",
        	subject: "business terminology",
        	source_term: "sign a contract",
        	target_term: "signer un contrat",
        	comment: "",
        	author: "author1"
    	   }
    	]); 
   }
});
