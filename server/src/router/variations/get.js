import Variation from '../../models/variation';

export default (req, res) => {
  Variation.find((err, variations) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (variations.length > 0) {
      return res.status(200).json({
        success: true,
        records: variations.length,
        data: variations,
      });
    }
    return res.status(200).json({ success: true, data: null });
  })
  .populate('routine', '_id');
};
