import Topic from '../../models/variation';

export default (req, res) => {
  const { topicId } = req.params;
  if (!topicId) {
    return res.json({ success: false, error: 'No topic id provided' });
  }
  Topic.deleteOne({ _id: topicId }, (error, topic) => {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    if (topic) return res.status(200).json({ success: true, message: 'topic deleted' });
    return res.status(400).json({ success: false, message: 'topic not found' });
  });
};