import mongoose, { CallbackError } from 'mongoose';
import bcrypt from 'bcrypt';
import { getErrorMessage } from '../helpers'

export interface UserDocument extends mongoose.Document {
  email: string;
  name: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
  comparePassword(candidatePassword: string): Promise<boolean>;
}



const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

userSchema.pre<UserDocument>('save', async function (next) {
  let user = this as UserDocument;

  const saltworkFactor: number = Number(process.env.saltWorkFactor) || 10;

  if (!user.isModified('password')) return next();

  try {
    const salt = await bcrypt.genSalt(saltworkFactor);
    const hashedPassword = await bcrypt.hashSync(user.password, salt);
    user.password = hashedPassword;
    next();
  } catch (error) {
    next(error as CallbackError);
  }
});

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument;
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false);
};

export const UserModel = mongoose.model('User', userSchema);
