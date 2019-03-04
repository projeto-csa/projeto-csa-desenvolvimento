import Topic from '../../models/topic';

export default (req, res) => {
  const { topicId } = req.params;
  if (!topicId) {
    return res.status(500).json({ success: false, error: 'No topicId id provided' });
  }
  Topic.findById(topicId, (err, topic) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (topic) {
      return res.status(200).json({
        success: true,
        topic,
      });
    }
    return res.status(404).json({ success: true, error: 'Topic not Found' });
  });
};
