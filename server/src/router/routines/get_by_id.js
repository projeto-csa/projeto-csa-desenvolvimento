import Routine from '../../models/routine';

export default (req, res) => {
  const { routineId } = req.params;
  if (!routineId) {
    return res.status(500).json({ success: false, error: 'No routine id provided' });
  }
  Routine.findById(routineId, (err, routine) => {
    if (err) {
      return res.status(500).json({ success: false, error: err });
    }
    if (routine) {
      return res.status(200).json({
        success: true,
        routine,
      });
    }
    return res.status(404).json({ success: true, error: 'Routine not Found' });
  })
  .populate('routine', '_id');
};
