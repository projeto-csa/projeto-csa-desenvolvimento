import Comment from '../../models/comment';

export default (req, res) => {
  const comment = new Comment();
  // body parser lets us use the req.body
  const { author, text } = req.body;
  if (!author || !text) {
    // we should throw an error. we can do this check on the front end
    return res.json({
      success: false,
      error: 'You must provide an author and comment',
    });
  }
  comment.author = author;
  comment.text = text;
  comment.save((err) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
};
