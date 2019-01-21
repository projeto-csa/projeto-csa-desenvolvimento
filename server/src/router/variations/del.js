import Variation from '../../models/variation';

export default (req, res) => {
  const { variationId } = req.params;
  if (!variationId) {
    return res.json({ success: false, error: 'No variation id provided' });
  }
  Variation.deleteOne({ _id: variationId }, (error, variation) => {
    if (error) return res.status(500).json({ success: false, error });
    return res.status(200).json({ success: true, message: 'variation deleted' });
  });
};
