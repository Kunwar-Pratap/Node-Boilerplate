import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  name: string
  email: string
  company: string
  location: string
  gender: 'Male' | 'Female'
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true },
    company: { type: String, required: true },
    location: { type: String, required: true },
    gender: { type: String, enum: ['Male', 'Female'], default: 'Male' },
  },
  { timestamps: true },
)

const User = mongoose.model<IUser>('User', userSchema)

export default User
