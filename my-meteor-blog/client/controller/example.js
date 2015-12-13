
Template.contextExample.rendered = function(){
	console.log('Renderes context example',this.data);
}

Template.contextExample.helpers({
	logContext:function(){
		console.log('Context Log helpers',this);
		return Session.get('randomNumber');
	}
})

Template.contextExample.events({
	'click button':function(e,Template){
		Session.set('randomNumber',Math.random(0,999));
	}
})

