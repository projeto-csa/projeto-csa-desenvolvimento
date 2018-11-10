import Comment from '../../models/comment';

export default (req, res) => {
  const { commentId } = req.params;
  if (!commentId) {
    return res.json({ success: false, error: 'No comment id provided' });
  }
  Comment.findById(commentId, (error, comment) => {
    if (error) return res.json({ success: false, error });
    const { author, text } = req.body;
    if (author) comment.author = author;
    if (text) comment.text = text;
    comment.save((error) => {
      if (error) return res.json({ success: false, error });
      return res.json({ success: true });
    });
  });
};
