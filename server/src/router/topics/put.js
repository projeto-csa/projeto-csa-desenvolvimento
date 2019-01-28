import Topic from '../../models/topic';

export default (req, res) => {
  const { topicId } = req.params;
  if (!topicId) {
    return res.status(500).json({ success: false, error: 'No topic id provided' });
  }
  Topic.findById(topicId, (err, topic) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (topic) {
      const { title, description } = req.body;
      if (title) {
        topic.title = title;
      }
      if (description) {
        topic.description = description;
      }
      topic.updated_at = Date.now;
      topic.save((error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            error,
          });
        }
        return res.status(200).json({
          success: true,
          modified_variation: topic,
        });
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'No topic found with given id',
      });
    }
  });
};
