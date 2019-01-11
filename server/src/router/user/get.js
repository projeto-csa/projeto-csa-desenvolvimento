import User from '../../models/user';

export default (req, res) => (
  User.find((error, users) => {
    if (error) {
      return res.status(500).json({ success: false, error });
    }
    return res.status(200).json({
      success: true,
      data: { users },
    });
  })
);
