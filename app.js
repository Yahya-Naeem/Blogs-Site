const express = require('express');
const morgan = require('morgan'); //thurdparty middleware , we will use it instead of use 
const mongoose = require('mongoose');
const { render } = require('ejs');
const Blog = require('./models/blog');
const router = require('./routes/blogRoutes'); 
const app = express();
//set ejs
app.set('view engine','ejs'); //if views folder is names as "views" else we'll have to set up accordingly
/* Connect to DB  */
const URI = 'mongodb+srv://Node1:Node1@nodelearner.7yb7qce.mongodb.net/' 
mongoose.connect(URI)
    .then((result)=>{
        console.log('Connected to DB');
        app.listen(3000);
    })
    .catch((err)=>{console.error("cant connect",err);});


    /*Delivering statis files . */
app.use(express.static('public')); //this will make files in public folder accessible else files will not be accessible by browser such as style.css

    /*for usig data in url*/
app.use(express.urlencoded({extended:true}));

    /* Get Requests */

app.get('/',(req,res)=>{
    Blog.find().sort({createdAt: -1})
    .then((result)=>{
        result = result.map((r1)=>(
            {
                title: r1.title,
                snippet: r1.snippet
            }
        ));
        res.render('index',{title:'All Blogs',blogs:result});
    })
    .catch((err)=>console.error('Error occured while fetching data',err));
    
});

app.get('/about',(req,res)=>{
    res.render('about' ,{title:'About'});
});

// the inner file will have routers after the part /blogs because "/blogs is already in here"
app.use('/blogs',router);

    /* Exception URL */
app.use((req,res)=>{
    res.status(404).render('404',{title:'Not Found'});
});