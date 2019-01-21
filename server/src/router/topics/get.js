import Topic from '../../models/topic';

export default (req, res) => {
  Topic.find((err, topics) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (topics.length > 0) {
      return res.status(200).json({
        success: true,
        records: topics.length,
        data: topics,
      });
    }
    return res.status(200).json({ success: true, data: null });
  })
  .populate('routines', '_id');
};
