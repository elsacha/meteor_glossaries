//################### HELPERS ###############################
//
// helper functions 
/// 
Template.glossaries.helpers({
  //display all publicly available glossaries
  public_glossaries:function(){
    return Glossaries.find();
  },
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete "' + doc.name + '"?')) {
        this.remove();
      }
    };
  }
})

Template.glossary_full_view.helpers({
  beforeRemove: function () {
    return function (collection, id) {
      var doc = collection.findOne(id);
      if (confirm('Really delete "' + doc.name + '"?')) {
        this.remove();
      }
    };
  }
})

// Template.glossary.helpers({
//   //display all publicly available glossaries
//   title: function(glos_id){
//   	glos = Glossaries.findOne({_id:glos_id});
//     return glos.title;
//   },
//   subject: function(glos_id){
//   	glos = Glossaries.findOne({_id:glos_id});
//     return glos.subject;
//   },
//   source_language: function(glos_id){
//   	glos = Glossaries.findOne({_id:glos_id});
//     return glos.title;
//   },
//   target_language: function(glos_id){
//   	glos = Glossaries.findOne({_id:glos_id});
//     return glos.title;
//   }
// })

Template.myGlossaries.helpers({
  my_glossaries:function(){
    return Glossaries.find({glossary_author: Meteor.userId()});
  }
})

Template.searchBox.helpers({
  glossariesIndex: () => GlossariesIndex
});
