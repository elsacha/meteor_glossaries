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



Template.home.helpers({
  tabs: function () {
    // Every tab object MUST have a name and a slug!
    return [
      { name: 'Create', slug: 'create' },
      { name: 'Search', slug: 'search' },
      { name: 'Edit', slug: 'edit'}
    ];
  },
  activeTab: function () {
    // Use this optional helper to reactively set the active tab.
    // All you have to do is return the slug of the tab.

    // You can set this using an Iron Router param if you want--
    // or a Session variable, or any reactive value from anywhere.

    // If you don't provide an active tab, the first one is selected by default.
    // See the `advanced use` section below to learn about dynamic tabs.
    // return Session.get('activeTab'); // Returns "people", "places", or "things".
  }
});
