import { CallbackError, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

export const sessionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  valid: {
    type: Boolean,
    required: true,
    default: true,
  },
  userAgent: {
    type: String,
    required: true,
  },
})
