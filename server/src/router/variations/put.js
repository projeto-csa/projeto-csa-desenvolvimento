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
      const { name, description } = req.body;
      if (name) {
        variation.name = name;
      }
      if (description) {
        variation.description = description;
      }
      variation.save((error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            error,
          });
        }
        return res.status(200).json({
          success: true,
          modified_variation: variation,
        });
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'No variation found with given id',
      });
    }
  });
};
