import mongoose from 'mongoose';

const postSchema=mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    id:Number,
    tname:String,
    price:Number,
    image:String
});

const PostMessage=mongoose.model('ingridients',postSchema);

export default PostMessage;