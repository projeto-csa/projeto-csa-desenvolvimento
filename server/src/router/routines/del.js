import Routine from '../../models/routine';

export default (req, res) => {
  const { routineId } = req.params;
  if (!routineId) {
    return res.json({ success: false, error: 'No routine id provided' });
  }
  Routine.deleteOne({ _id: routineId }, (error, routine) => {
    if (error) return res.status(500).json({ success: false, error });
    return res.status(200).json({ success: true, message: 'Routine deleted' });
  });
};
