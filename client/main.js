import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

// Template.hello.onCreated(function helloOnCreated() {
//   // counter starts at 0
//   this.counter = new ReactiveVar(0);
// });

// Template.hello.helpers({
//   counter() {
//     return Template.instance().counter.get();
//   },
// });

// Template.hello.events({
//   'click button'(event, instance) {
//     // increment the counter when button is clicked
//     instance.counter.set(instance.counter.get() + 1);
//   },
// });

// set up the main template the the router will use to build pages
Router.configure({
  layoutTemplate: 'layout'
});

// specify the top level route, the page users see when they arrive at the site
Router.route('/', function () {
  // if (!Meteor.user()) {
  //   this.render("navbar", {to: "header"});
  //   this.render("not_authorized", {to: "main"});
  // } else {
    console.log("rendering root");
    //this.render("navbar", {to:"header"});
    //this.render("home", {to:"main"});
    this.render('home');
    //this.render("footer", {to:"footer"});  
  // }
});

Router.route('/glossaries', function () {
    console.log("rendering /glossaries");
    //this.render("navbar", {to:"header"});
    //this.render("glossaries", {to:"main"}); 
    this.render('glossaries'); 
  // }
});

Router.route('/add', function () {
    console.log("rendering /add");
    // this.render("navbar", {to:"header"});
    // this.render("insertGlossaryForm", {to:"main"});  
    this.render('insertGlossaryForm');
  // }
});

//view glossary by id
Router.route('/view/:_id', {
    //template: "glossary_full_view",
    yieldTemplates: {
            //'navbar': { to: 'header'},
            'glossary_full_view': { to: 'main'}
    },
    data: function(){
        var currentGlossary = this.params._id;
        return Glossaries.findOne({_id: currentGlossary});
    }
    //this.render("updateGlossaryForm", {to:"main"}); 
  // }
});

Router.route('/update/:_id', {
    //template: "updateGlossaryForm",
    yieldTemplates: {
            //'navbar': { to: 'header'},
            'updateGlossaryForm': { to: 'main'}
    },
    data: function(){
        var currentGlossary = this.params._id;
        return Glossaries.findOne({_id: currentGlossary});
    }
    //this.render("updateGlossaryForm", {to:"main"});  
  // }
});

Router.route('/my_glossaries', function () {
    console.log("rendering /my_glossaries");
    // this.render("navbar", {to:"header"});
    // this.render("myGlossaries", {to:"main"}); 
    this.render('myGlossaries'); 
  // }
});

Router.route('/search', function () {
    console.log("rendering /search");
    // this.render("navbar", {to:"header"});
    // this.render("searchBox", {to:"main"});  
    this.render('searchBox');
  // }
});

//delete null values from the array of terms when terms are deleted in the update form
AutoForm.addHooks(['updateGlossaryForm'],
{
  formToModifier: function(modifier) {
    if (modifier.$set.terms) {
      modifier.$set.terms = _.compact(modifier.$set.terms);
    }
    return modifier;
  }
});

//Reactive tabs configuration
//register
ReactiveTabs.createInterface({
  template: 'basicTabs',
  onChange: function (slug, template) {
    // This callback runs every time a tab changes.
    // The `template` instance is unique per {{#basicTabs}} block.
    console.log('[tabs] Tab has changed! Current tab:', slug);
    console.log('[tabs] Template instance calling onChange:', template);
  }
});




