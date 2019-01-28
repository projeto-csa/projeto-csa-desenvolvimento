import Routine from '../../models/routine';
import Variation from '../../models/variation';
import Topic from '../../models/topic';

export default (req, res) => {
  const { routineId } = req.params;
  if (!routineId) {
    return res.json({ success: false, error: 'No routine id provided' });
  }
  Variation.deleteMany({ routine: routineId }, function (err) {});
  Topic.deleteMany({ routines: { $in: routineId } }, function (err) {});
  Routine.deleteOne({ _id: routineId }, (error, routine) => {
    if (error) {
      return res.status(500).json({ success: false, error }); 
    }
    if (routine) return res.status(200).json({ success: true, message: 'Routine deleted' });
    return res.status(400).json({ success: false, message: 'Routine not found' });
  });
};
