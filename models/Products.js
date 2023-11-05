const mongoose = require('mongoose');

// Create a schema for the Products collection
const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  imageURL: {
    type: String,
    required: true,
  },
  // You can add more fields as needed
});

// Create a model for the Products collection based on the schema
const Product = mongoose.model('Product', productSchema);

// Export the Product model to use it in other parts of your application
module.exports = Product;