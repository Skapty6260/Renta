export interface IProduct {
	createdAt: Date
	updatedAt: Date
	price: number
	images?: Array<string>
	description?: string
	rooms: number // yes
	area: number // yes
	location: string
	type: 'Appartment' | 'Home' | 'Room' // yres
	offer: 'sale' | 'rent' // yes
}
