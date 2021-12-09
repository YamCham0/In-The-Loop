const mongoose = require('mongoose');
const Schema = mongoose.Schema
const bcrypt = require('bcrypt');

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema(
    {
        username: {
            type:String,
            required:true,
            unique:true,
        },
        email:{
            type:String,
            required:true,
            unique:true,
            match:[/.+@.+\..+/, 'Please use a valid human email address that is actually real, thank you!']
        },
        password:{
            type:String,
            required:true,
        },
        progress: [
            {
                type: ObjectId,
                ref: 'Question'
            }
        ]
    }
);

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });

// custom method to compare and validate password for logging in
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;

