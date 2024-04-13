const mongoose = require('mongoose');
const Schema = mongoose.Schema; //schema is a constructor function of type we are gonna store in collection 
const blogSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
        },
        snippet:{
            type: String,
            required: true,
        },
        body: {
            type: String,
            required: true,
        }
    }
    , 
    {
        timestamps: true,
    }
); //new instance of schema object

const Blog = mongoose.model('Blog', blogSchema);
module.exports = Blog;