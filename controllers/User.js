const User = require("../models/User");

// fetch all categories get 
const fetchUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id, "name email id").exec();
    res.status(200).json(user);
  } catch (e) {
    res.status(400).json(e);
  }
};

// update user by id -- update 
const updateUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const doc = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(doc);
  } catch (e) {
    res.status(400).json(e);
  }
};

/* ====================
        Auth 
        ====================*/
// create user -- signup  -- create -- post
const createUser = async (req, res) => {
  // TODO: 400 -- Incorrect email
  try {
    const user = new User(req.body);
    const doc = await user.save();
    res.status(201).json({ id: doc.id, role: doc.role });
  } catch (e) {
    res.status(400).send(e);
  }
};

// login --- post -- checkUser on front end
const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      res.status(400).json("Incorrect email");
    }
    // temporarily -- TODO: will use encrypted password later
    else if (user.password === req.body.password) {
      // TODO: will make addresses independent of login
      res.status(200).json({ id: doc.id, role: doc.role });
    } else {
      res.status(400).json("Incorrect password");
    }
  } catch (e) {
    res.status(401).json(e);
  }
};

module.exports = {
  fetchUserById,
  updateUserById,
  createUser,
  loginUser,
};
