import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id:String,
    type:String,
    price:Number,
    name:String,
    image:String,
    description:String,
    ingredients:Array,
    topping:Array
});


const PostMessage=mongoose.model('pizza',postSchema);

export default PostMessage;