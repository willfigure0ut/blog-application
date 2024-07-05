const Blog = require("../models/blogs")
 const handleUpload = async (req, res) => {
    try {
        console.log(req.body)
        if (!req.file) {
            
            return res.status(400).json({ error: 'No thumbnail uploaded' });
        }

        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ error: 'Title and content are required' });
        }

        const newBlog = new Blog({
            title,
            content,
            thumbnail: req.file.path, 
            author: req.user.userID 
        });

        await newBlog.save();

        res.status(201).json({
            message: 'Blog created successfully',
            blog: newBlog
        });
    } catch (error) {
        console.error('Error creating blog:', error);
        res.status(500).json({ error: 'An error occurred while creating the blog' });
    }
};

module.exports = handleUpload
