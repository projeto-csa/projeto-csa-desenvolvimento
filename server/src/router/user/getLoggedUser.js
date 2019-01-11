import User from '../../models/user';

export default (req, res) => {
  const loggedUser = req.user;
  if (!loggedUser) {
    res.status(403).json({
      success: false,
      message: 'Not logged in.',
    });
  }
  User.findById(loggedUser.id, (error, user) => {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    if (user) {
      return res.status(200).json({
        success: true,
        data: { user },
      });
    }
    return res.status(404).json({
      success: false,
      message: 'User not Found',
    });
  });
};
