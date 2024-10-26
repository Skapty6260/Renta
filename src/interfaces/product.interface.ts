export interface IProduct {
	_id: any
	createdAt: Date
	updatedAt: Date
	price: number
	image?: Array<string>
	description?: string
	rooms: number // yes
	area: number // yes
	location: string
	type: 'Apartment' | 'Home' | 'Room' // yres
	offer: 'sale' | 'rent' // yes
}
