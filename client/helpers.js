//################### HELPERS ###############################
//
// helper functions 
/// 
Template.glossaries.helpers({
  //display all publicly available glossaries
  public_glossaries:function(){
    return Glossaries.find();
  }
})

Template.glossary.helpers({
  //display all publicly available glossaries
  title: function(glos_id){
  	glos = Glossaries.findOne({_id:glos_id});
    return glos.title;
  },
  subject: function(glos_id){
  	glos = Glossaries.findOne({_id:glos_id});
    return glos.subject;
  },
  source_language: function(glos_id){
  	glos = Glossaries.findOne({_id:glos_id});
    return glos.title;
  },
  target_language: function(glos_id){
  	glos = Glossaries.findOne({_id:glos_id});
    return glos.title;
  }
})