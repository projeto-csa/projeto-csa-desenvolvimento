import User from '../../models/user';

export default (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.json({ success: false, error: 'No user id provided' });
  }
  return User.deleteOne({ _id: id }, (error) => {
    if (error) return res.status(500).json({ success: false, error });
    return res.status(200).json({ success: true, message: 'user deleted' });
  });
};
