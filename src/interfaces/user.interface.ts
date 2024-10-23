import { IProduct } from './product.interface'

export interface IUser {
	username: string
	password: string
	role: 'user' | 'admin'
	createdAt: Date
	updatedAt: Date
	disposals: IProduct[]
}
