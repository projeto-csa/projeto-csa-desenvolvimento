import User from '../../models/user';

export default (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(500).json({
      success: false,
      error: 'No user id provided',
    });
  }
  return User.findById(id, (error, user) => {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    if (user) {
      return res.status(200).json({
        success: true,
        user,
      });
    }
    return res.status(404).json({
      success: false,
      message: 'User not Found',
    });
  });
};
