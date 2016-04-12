//Glossaries = new Mongo.Collection("glossaries");
Glossaries = new Mongo.Collection('glossaries');
  GlossariesIndex = new EasySearch.Index({
    collection: Glossaries,
    fields: ['title', 'subject', 'terms.source_term', 'terms.target_term'],
    engine: new EasySearch.Minimongo()
  });
Users = Meteor.users;

Glossaries.attachSchema(new SimpleSchema({
  "title": {
    type: String,
    label: "Title",
    max: 200
  },
  "source_language": {
    type: String,
    label: "Source Language",
	allowedValues: ["English", "French", "German", "Russian", "Spanish"],
	autoform: {
      afFieldInput: {
        firstOption: "Select a language"
      }
    }
  },
  "target_language": {
    type: String,
    label: "Target Language",
    allowedValues: ["English", "French", "German", "Russian", "Spanish"],
	autoform: {
      afFieldInput: {
        firstOption: "Select a language"
      }
    }
  },
  "subject": {
    type: String,
    label: "Subject",
    max: 200
  },
  "terms": {
    type: [Object],
    label: "Terms"
  },
  "terms.$.source_term": {
    type: String,
    label: "Source Term",
    max:400
  },
  "terms.$.target_term": {
    type: String,
    label: "Target Term",
    max:400
  },
  "terms.$.comment": {
    type: String,
    label: "Comment",
    max: 600
  },
  "terms.$.term_author": {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue:function(){ return this.userId }
  },
  "glossary_author": {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue:function(){ return this.userId }
  },
  "public": {
    type: Boolean,
    label: "Public"
  },
  "lastUpdated": {
    type: Date,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue:function(){ return new Date();}
  }
}));

// Glossaries.before.update(function (userId, doc, fields, modifier, options) {
//   // Do some checks for my desired field.. blah blah..  
//   modifier.$set.terms = _.compact(modifier.$set.terms);
// });


