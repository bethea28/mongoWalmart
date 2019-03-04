import mongoose from 'mongoose';

const Schema = mongoose.Schema; 

const itemModel = new Schema({
	id: { type: Number },
  name: { type: String, required: true },
  // ref: "Useri"
});
export default mongoose.model('item', itemModel)