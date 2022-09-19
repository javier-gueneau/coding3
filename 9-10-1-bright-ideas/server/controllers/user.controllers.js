const User = require('../models/user.model');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const {secret} = require('../config/jwt.config');

module.exports.registerUser = (req, res) => {
    console.log(req.body)
    const user=new User(req.body);
    user
        .save()
        .then(() =>{res.json({msg:"Success!", user:user})
})
    .catch(err=>res.json(err))
}


module.exports.loginUser= (req, res) => {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user === null) {
          res.json({ msg: "invalid login attempt" });
        } else {
          bcrypt
            .compare(req.body.password, user.password)
            .then(passwordIsValid => {
              if (passwordIsValid) {
                const newJWT = jwt.sign({
                      _id: user._id
                },secret)

                res
                  .cookie("usertoken", newJWT, secret, {
                    httpOnly: true
                  })
                  .json({ msg: "success!" });
              } else {
                res.json({ msg: "invalid login attempt" });
              }
            })
            .catch(err => res.json({ msg: "invalid login attempt" }));
        }
      })
      .catch(err => res.json(err));
  };