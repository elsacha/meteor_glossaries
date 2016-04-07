Glossaries = new Mongo.Collection("glossaries");
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
    max: 50
  },
  "target_language": {
    type: String,
    label: "Target Language",
    max: 50
  },
  "subject": {
    type: String,
    label: "Subject",
    max: 200
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
    label: "Term Author",
    max:200
  },
  "glossary_author": {
    type: String,
    autoValue:function(){ return this.userId }
  },
  "public": {
    type: Boolean,
    label: "Public"
  }
}));