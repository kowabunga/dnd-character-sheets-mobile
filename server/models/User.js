import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  characters: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'charactersheet',
    },
  ],
  passwordResetToken: {
    type: String,
    default: null,
  },
  passwordResetTokenExpiry: {
    type: String,
    default: null,
  },
});

//Right before database save, check if password has been modified.
//If password is modified, hash new password and save in place of old password
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  } else {
    const hashedPassword = await bcrypt.hash(
      this.password,
      await bcrypt.genSalt()
    );

    this.password = hashedPassword;
  }
});

//Check if password submitted via login is same as hashed password saved in db
UserSchema.methods.checkPassword = async function (oldPassword) {
  return await bcrypt.compare(oldPassword, this.password);
};

const User = mongoose.model('user', UserSchema);

export default User;
