import Variation from '../../models/variation';

export default (req, res) => {
  const { variationId } = req.params;
  if (!variationId) {
    return res.status(500).json({ success: false, error: 'No variation id provided' });
  }
  Variation.findById(variationId, (err, variation) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (variation) {
      return res.status(200).json({
        success: true,
        variation,
      });
    }
    return res.status(404).json({ success: true, error: 'Variation not Found' });
  })
  .populate('routine', '_id');
};
