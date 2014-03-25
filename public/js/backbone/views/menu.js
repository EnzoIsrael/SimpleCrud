Enzo.Views.Navbar = Backbone.View.extend({

	el: '#navMenu',

	events:{
		'click .fi-plus'  : 'newPost'		
	},

	initialize: function(){

	},

	newPost: function(){
		alert("Holi :)")
	}
	
});