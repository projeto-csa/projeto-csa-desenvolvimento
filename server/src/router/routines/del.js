import Routine from '../../models/routine';
import Variation from '../../models/variation';

export default (req, res) => {
  const { routineId } = req.params;
  if (!routineId) {
    return res.json({ success: false, error: 'No routine id provided' });
  }
  Variation.deleteMany({ routine: routineId }, function (err) {});
  Routine.deleteOne({ _id: routineId }, (error, routine) => {
    if (error) return res.status(500).json({ success: false, error });
    return res.status(200).json({ success: true, message: 'Routine deleted' });
  });
};
