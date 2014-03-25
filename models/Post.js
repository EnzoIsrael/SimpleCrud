module.exports = function(mongoose, models){
	var collection = 'Post', 
		Schema     = mongoose.Schema;

		var schema = new Schema({
			autor 	: String,
			body	: String,
			title 	: String
		});

		this.model = mongoose.model(collection, schema);

		return this;
}