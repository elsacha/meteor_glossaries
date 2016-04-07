import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  if (!Glossaries.findOne()){
        console.log("creating sample glossaries");
        var glos = 
        [
           {
           	title: "Terms for business meetings",
        	source_language: "English",
        	target_language: "French",
        	subject: "business terminology",
        	terms: 
        	[
        		{
	        		source_term: "business meeting",
	        		target_term: "réunion d'affaires",
	        		comment: "comment 1",
	        		term_author: "author1"
        		},

        		{
	        		source_term: "sign a contract",
	        		target_term: "signer un contrat",
	        		comment: "comment 1",
	        		term_author: "author2"
        		}
        	],
        	
        	glossary_author: "author1",
            public: true
    	   },
    	   {
    	   	title: "Tourism",
        	source_language: "English",
        	target_language: "Spanish",
        	subject: "tourism",
        	terms: 
        	[
        		{
	        		source_term: "travel agency",
	        		target_term: "agencia de viajes",
	        		comment: "comment 3",
	        		term_author: "author2"
        		},

        		{
	        		source_term: "sea",
	        		target_term: "mar",
	        		comment: "comment 4",
	        		term_author: "author3"
        		}
        	],
       		glossary_author: "author2",
            public: true
    	   }
    	];
    	//apparently multiple document insert does not function in Meteor's mongodb
    	_.each(glos, function(g) { 
  			Glossaries.insert(g);
		})
   }
});
