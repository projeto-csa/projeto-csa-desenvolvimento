import Routine from '../../models/routine';

export default (req, res) => {
  Routine.find((err, routines) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (routines.length > 0) {
      return res.status(200).json({
        success: true,
        records: routines.length,
        data: routines,
      });
    }
    return res.status(200).json({ success: true, data: null });
  });
};
