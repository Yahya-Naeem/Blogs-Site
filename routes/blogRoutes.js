const express = require('express');
const router = express();
const Blog = require('../models/blog');
const blogController = require('../controllers/blogController');
// these all routes have /blog before them 

router.get('/create',blogController.blog_create_get);
router.get('/',blogController.blog_index);

    /* Post requests */
router.post('/',blogController.blog_create_post);

    /* Get with Route params */
 router.get('/:id',blogController.blog_details);

    /* Delete Request */
router.delete('/:id',blogController.blog_create_delete);
    
    /* Exceptions */
router.use((req,res)=>{
    res.status(404).render('404',{title:'Not Found'});
});
module.exports = router;