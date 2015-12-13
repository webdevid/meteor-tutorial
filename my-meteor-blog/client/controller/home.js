/*
Controller for template home.html
 */

Template.home.created = function(){
	console.log('created the home template');
};

Template.home.rendered = function(){
	console.log('Rendered the home template');
};

Template.home.destroyed = function(){
	console.log('destroyed the gome template');
};


/* helper to display data in the home template */
Template.home.helpers({
	exampleHelper:function(){
		return 'This text came from a helper with some <strong>HTML</strong>';
	},
	exampleHtmlSaveXss:function(){
		return new Spacebars.SafeString('This text came from a helper with some <strong>HTML</strong>');
	}
});