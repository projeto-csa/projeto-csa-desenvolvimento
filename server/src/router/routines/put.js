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
      const { name, description } = req.body;
      if (name) {
        routine.name = name;
      }
      if (description) {
        routine.description = description;
      }
      routine.save((error) => {
        if (error) {
          return res.status(500).json({
            success: false,
            error,
          });
        }
        return res.status(200).json({
          success: true,
          modified_routine: routine,
        });
      });
    } else {
      return res.status(404).json({
        success: false,
        message: 'No routine found with given id',
      });
    }
  });
};
