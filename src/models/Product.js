import {Schema, model} from 'mongoose';

const productSchema = new Schema({
    name: String,
    category: String,
    price: Number,
    imgURL: String
},{
    timestamps: true,
    versionkey: false
})

export default model('product', productSchema)