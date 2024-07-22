const mongoose = require('mongoose')

    const UserSchema = new mongoose.Schema({
        name: {
          type: String,
          required: true,
        },
        email: {
          type: String,
          required: true,
          unique: true,
        },
        mobile:{
            type: String,
            // required: true, 
            // unique: true,
        },
        password: {
          type: String,
          // required: true,
        },
        role: {
          type: String,
          default: 'user',
        },
      }, {
        timestamps: true,
      },)

      const UserData = mongoose.model('user',UserSchema)
      module.exports = UserData