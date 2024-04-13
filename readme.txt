for showing dynamic data in HTML , we can use view contnt or template engine which can be used in express
we use EJS for this 

//getting api from atlas mongo ,
- go to databases ,
- scrolldown ,
- copy connection string ,
- replace username nad password in connection string  
- mongodb+srv://Node1:Node1@nodelearner.7yb7qce.mongodb.net/?retryWrites=true&w=majority&appName=NodeLearner

Mongoose is ODM Llibrary , object document mapping lubarary
- wraps the  api and make mongo implementation easier 
- npm install mongoose
- require mongoose.connect(URI, {useNewUrlParser: true, useUnifiedTopology: true}) //is a promise asynch
  .then(()=>{}).catch(err=>{})

Morgan is a middleware use to console logs even after .use function 
- npm install Morgan
= require Morgan
- app.use(morgan('dev')); is usage of morgan .


Models
- require mongoose .
- get schema object from mongoose.schema in a variable 
- call instance of this variable and store it in blogSchema variable
- const blogSchema = Schema({ // add variables in object} , {timestamp:true});
- create model that takes this schema .
- mongoose.model(//'name of model', //name of schema) 
- model name will be used to access it later .

Functions to save and read data 
app.get('/add-blog',(req,res)=>{
        const blog = new Blog({
            title: 'new Blog',
            snippet: 'about my new blog',
            body: 'more about it'
        });
        //save the blog . it is asynch task
        blog.save()
        .then((result)=>{
            res.send(result);
        })
        .catch((err)=>{
            console.err('Error',err);
        });
});
app.get('/all-blogs',(req,res)=>{
    Blog.find() //fetchs all docs
    .then((result)=>{
        res.send(result);
    })
    .catch(err=>res.send(err));
});

app.get('/single-blog',(req,res)=>{
    Blog.findById("6617c8a717966353c58da0af")
    .then((result)=>res.send(result))
    .catch(err=>res.send(err))
})


