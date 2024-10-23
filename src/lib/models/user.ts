import { ProductSchema } from './product'
import { Schema, model, models } from 'mongoose'

const UserSchema = new Schema(
	{
		username: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role: { type: String, required: true, default: 'user' },
		disposals: [ProductSchema],
	},
	{
		timestamps: true,
	}
)

const User = models.User || model('User', UserSchema)

export default User
