const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    id: String,
    name: String,
    image: String,
    description: String,
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;
