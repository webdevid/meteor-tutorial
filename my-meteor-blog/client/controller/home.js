/*
Controller for template home.html
 */

Template.home.created = function(){
	console.log('created the home template');
};

Template.home.rendered = function(){
	console.log('Rendered the home template');
	/* example access DOM of template */
	this.$('p').html('we just replaced p text');
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
	},
	/* setting dynamic context html */
	dataContextHelper:function(){
		return{
			someText:'this text was set using a helper of the parent template.',
			someNested:{
				text:'That comes from "someNested.text"'
			}
		}
	}

});


