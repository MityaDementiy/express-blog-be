const db = require('../../db/db');

exports.listBlogPosts = async (req, res) => {
  const blogPosts = await db.getBlogPosts();
  const context = {
    blogPosts: blogPosts.map((blogPost) => ({
      id: blogPost.id,
      name: blogPost.name,
      slug: blogPost.slug,
      content: blogPost.content,
      category: blogPost.category,
    })),
  };

  res.send(context);
};
