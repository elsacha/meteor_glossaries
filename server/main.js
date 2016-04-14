import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
  // if (!Glossaries.findOne()){
  //       console.log("creating sample glossaries");
  //       var glos = 
  //       [
  //          {
  //          	title: "Terms for business meetings",
  //       	source_language: "English",
  //       	target_language: "French",
  //       	subject: "business terminology",
  //       	terms: 
  //       	[
  //       		{
	 //        		source_term: "business meeting",
	 //        		target_term: "réunion d'affaires",
	 //        		comment: "comment 1",
	 //        		term_author: "sRJKpKXHZxQXRbJT71"
  //       		},

  //       		{
	 //        		source_term: "sign a contract",
	 //        		target_term: "signer un contrat",
	 //        		comment: "comment 1",
	 //        		term_author: "author2"
  //       		}
  //       	],
        	
  //       	glossary_author: "author1",
  //           public: true
  //   	   },
  //   	   {
  //   	   	title: "Tourism",
  //       	source_language: "English",
  //       	target_language: "Spanish",
  //       	subject: "tourism",
  //       	terms: 
  //       	[
  //       		{
	 //        		source_term: "travel agency",
	 //        		target_term: "agencia de viajes",
	 //        		comment: "comment 3",
	 //        		term_author: "author2"
  //       		},

  //       		{
	 //        		source_term: "sea",
	 //        		target_term: "mar",
	 //        		comment: "comment 4",
	 //        		term_author: "author3"
  //       		}
  //       	],
  //      		glossary_author: "author2",
  //           public: true
  //   	   }
  //   	];
  //   	//apparently multiple document insert does not function in Meteor's mongodb
  //   	_.each(glos, function(g) { 
  // 			Glossaries.insert(g);
		// })
  //  }
});

Meteor.publish("glossaries", function(){
  var filter = {$or:[
                {glossary_author : this.userId}, 
                {public : true}
                ]};
  return Glossaries.find(filter);
})

Meteor.publish('users', function() {
    return Meteor.users.find();
});

Glossaries.allow({
  insert: function (userId, doc) {
    // the user must be logged in, and the document must be owned by the user
    return (userId);
  },
  update: function (userId, doc, fields, modifier) {
    // can only change your own documents
    return doc.glossary_author === userId;
    //return true;
  },
  remove: function (userId, doc) {
    // can only remove your own documents
    return doc.glossary_author === userId;
  },
  fetch: ['glossary_author']
});

// Glossaries.deny({
//   update: function (userId, doc, fields, modifier) {
//     // can't change owners
//     return _.contains(fields, 'glossary_author');
//   },
//   remove: function (userId, doc) {
//     // can't remove locked documents
//     return doc.locked;
//   },
//   fetch: ['locked'] // no need to fetch 'owner'
// });

