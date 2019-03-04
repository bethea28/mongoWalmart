import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const usersModel = new Schema({
	id: { type: Number },
	name: { type: String , required: true },
	items: { type: Array},
	
});
export default mongoose.model('items', usersModel)