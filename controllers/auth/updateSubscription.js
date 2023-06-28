const {
  userSchemas: { User },
} = require('../../models');

const updateSubscription = async (req, res) => {
  const { _id } = req.user;
  const data = await User.findOneAndUpdate(_id, req.body, {
    new: true,
  });

  res.status(200).json({
    message: 'success',
    data: {
      user: {
        email: data.email,
        subscription: data.subscription,
      },
    },
  });
};

module.exports = updateSubscription;
