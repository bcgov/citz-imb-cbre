import { CallbackError, Schema } from 'mongoose'
import bcrypt from 'bcrypt'
import { UserDocument } from './user.type'

export const userSchema = new Schema({
  name: {
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
  },
}, {
  timestamps: true,
})

userSchema.pre('save', async function (next) {
  const user = this as UserDocument

  if (!user.isModified('password')) return next()

  try {
    const saltfactor = Number(process.env.saltWorkFactor) || 10
    const salt = await bcrypt.genSalt(saltfactor)
    const hashedPassword = await bcrypt.hash(user.password, salt)
    user.password = hashedPassword
    next()
  } catch (error) {
    next(error as CallbackError)
  }
})

userSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {
  const user = this as UserDocument
  return bcrypt.compare(candidatePassword, user.password).catch((e) => false)
}
