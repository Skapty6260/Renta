import { DataBase } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	try {
		await new DataBase().connect()

		if (request) {
			const params = request.url.split('http://localhost:3000/api/products')

			if (params[1].length !== 0 && !params[1].includes('&')) {
				const id = DataBase.validateId(params[1].split('=')[1] as any)

				if (id == false) {
					return new NextResponse(
						JSON.stringify({
							message: `Invalid id ${params[1].split('=')[1]}`,
						}),
						{
							status: 400,
						}
					)
				}

				const product = await DataBase.Product.findOne({
					_id: params[1].split('=')[1],
				})
				if (!product)
					return new NextResponse(
						JSON.stringify({
							message: `product with that id not found.`,
						}),
						{ status: 404 }
					)

				return new NextResponse(JSON.stringify({ product: product }), {
					status: 200,
				})
			} else {
				const products = await DataBase.Product.find()

				return new NextResponse(JSON.stringify(products), { status: 200 })
			}
		}
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in fetching products' + error.message),
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
