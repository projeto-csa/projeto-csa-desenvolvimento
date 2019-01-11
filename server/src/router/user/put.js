import User from '../../models/user';

export default (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(500).json({ success: false, erroror: 'No user id provided' });
  }
  return User.findById(id, (error, user) => {
    if (error) {
      res.status(500).json({ success: false, error });
    }
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'No user found with given id',
      });
    }

    const { email, password } = req.body;

    const updatedUser = user;

    if (email) {
      updatedUser.email = email;
    }
    if (password) {
      updatedUser.password = password;
    }
    return updatedUser.save((_error) => {
      if (_error) {
        return res.status(500).json({
          success: false,
          error: _error,
        });
      }
      return res.status(200).json({
        success: true,
        data: { user },
      });
    });
  });
};
