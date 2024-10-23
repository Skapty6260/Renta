import { DataBase } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async () => {
	try {
		await new DataBase().connect()
		const products = await DataBase.Product.find()

		if (!products)
			return new NextResponse(
				JSON.stringify({ products: null, message: 'Products not found' }),
				{ status: 404 }
			)
		return new NextResponse(JSON.stringify({ products: products }), {
			status: 200,
		})
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in fetching products' + error),
			{ status: 500 }
		)
	}
}

export const POST = async (request: Request) => {
	try {
		const body = await request.json()
		await new DataBase().connect()

		const product = await DataBase.Product.create(body)
		await product.save()

		return new NextResponse(JSON.stringify({ product: product }), {
			status: 200,
		})
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in creating product' + error),
			{ status: 500 }
		)
	}
}
