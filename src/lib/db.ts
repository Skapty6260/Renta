import mongoose, { Types } from 'mongoose'
import User from './models/user'
import Product from './models/product'

const MONGO_URI = process.env.MONGODB_URI

if (!MONGO_URI) {
	throw new Error(
		'Please define the MONGODB_URI environment variable inside .env'
	)
}

export class DataBase {
	static User = User
	static Product = Product

	constructor() {}

	async connect() {
		const connectionState = mongoose.connection.readyState

		if (connectionState === 1) {
			return console.log('Database already connected')
		}

		if (connectionState === 2) {
			return console.log('Database is connecting...')
		}

		try {
			mongoose.connect(MONGO_URI!, {
				dbName: 'renta',
				bufferCommands: true,
			})
		} catch (e: any) {
			console.error('Database connection error: ', e)
			throw new Error(e)
		}
	}

	static validateId(id: Types.ObjectId) {
		return mongoose.Types.ObjectId.isValid(id)
	}
}
