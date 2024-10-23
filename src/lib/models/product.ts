import { Schema, model, models } from 'mongoose'

export const ProductSchema = new Schema(
	{
		price: { type: Number, required: true },
		description: { type: String, required: false },
		image: { type: Array, required: true, default: [] },
		rooms: { type: Number, required: true },
		area: { type: Number, required: true },
		location: { type: String, required: true },
		type: { type: String, required: true, default: 'apartment' },
		offer: { type: String, required: true, default: 'sale' },
	},
	{
		timestamps: true,
	}
)

const Product = models.Product || model('Product', ProductSchema)

export default Product
