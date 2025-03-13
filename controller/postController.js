const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = await Post.create(req.body);
    res.status(201).json({
      success: true,
      data: post
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};


exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    
    
    res.status(200).json({
      success: true,
      count: posts.length,
      data: posts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'POST larni olib bolmadi '
    });
  }
};


exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: `${post} id dage postni topib bolmadi `
      });
    }
    
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'ID notogri formatda berilgan'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Postni olishda xatolik yuz berdi '
    });
  }
};


exports.updatePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true 
      }
    );
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Пост с таким ID не найден'
      });
    }
    
    res.status(200).json({
      success: true,
      data: post
    });
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Неверный формат ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
};


exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findByIdAndDelete(req.params.id);
    
    if (!post) {
      return res.status(404).json({
        success: false,
        message: 'Пост с таким ID не найден'
      });
    }
    
    
    res.status(200).json({
      success: true,
      data: {}
    });
  } catch (error) {
    
    if (error.name === 'CastError') {
      return res.status(400).json({
        success: false,
        message: 'Неверный формат ID'
      });
    }
    
    res.status(500).json({
      success: false,
      message: 'Ошибка при удалении поста'
    });
  }
};