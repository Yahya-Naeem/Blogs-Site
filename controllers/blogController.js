const Blog = require('../models/blog');
//blog_index -> all blogs 
const blog_index = (req,res) =>{
    Blog.find().sort({createdAt:-1})
    .then((result)=>{
        res.render('blogs/blogs',{title:'All Blogs',blogs:result});
    })
    .catch((err)=>{
        console.error('Error in Blogs fetching',err);
    })
}

//blog_details-> single blog
const blog_details = (req,res)=>{
    const id = req.params.id;
    console.log('id',id);
    Blog.findById(id)
    .then((result)=>{
       res.render('blogs/details',{blog:result,title:'Blog Details'});
    })
    .catch((err)=>{
        res.render('404',{title:'blog not found'});
    })
}

//blog_create_get => send back actual form
const blog_create_get = (req,res) =>{
    res.render('blogs/create' ,{title:'Create a Blog'});
}
//blog_create_post -> post blog request for creation
const blog_create_post = (req,res) =>{
    const blog = new Blog(req.body);
    blog.save()
    .then((result)=>{
        res.redirect('/');
    }).catch((err)=>{
        console.error('Error posting form data');
    });
}

//blog_create_delete -> delete blog 
const blog_create_delete = (req,res)=>{
    const id = req.params.id;
    Blog.findByIdAndDelete(id)
    .then(result=>{
        //cant redirect because this is for ajax request so send json
        res.json({redirect:'/blogs'});
    })
    .catch((err)=>{
        console.error('Error Deleting',err);
    })
}
module.exports = {
    blog_index,
    blog_details,
    blog_create_get,
    blog_create_post,
    blog_create_delete,
}