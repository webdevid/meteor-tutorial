
Template.contextExample.rendered = function(){
	console.log('Renderes context example',this.data);
}

Template.contextExample.helpers({
	logContext:function(){
		console.log('Context Log helpers',this);
	}
})

