import { DataBase } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	try {
		await new DataBase().connect()

		if (request) {
			const params = request.url.split('http://localhost:3000/api/users')

			if (params.length == 2) {
				const user = await DataBase.User.findOne({
					username: params[1],
					password: params[2],
				})

				if (!user)
					return new NextResponse(
						JSON.stringify({
							message: 'user with that username and password not found.',
						}),
						{ status: 404 }
					)

				return new NextResponse(JSON.stringify(user), { status: 200 })
			}

			return new NextResponse(
				JSON.stringify(
					`Invalid parameters. You should provide username and password ${params.length}`
				),
				{ status: 400 }
			)
		}

		const users = await DataBase.User.find()

		return new NextResponse(JSON.stringify(users), { status: 200 })
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in fetching users' + error.message),
			{ status: 500 }
		)
	}
}

export const POST = async (request: Request) => {
	try {
		const body = await request.json()
		await new DataBase().connect()
		const user = await DataBase.User.create(body)
		await user.save()

		return new NextResponse(
			JSON.stringify({ message: 'User created', user: user }),
			{ status: 200 }
		)
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in creating user' + error.message),
			{ status: 500 }
		)
	}
}

export const PATCH = async (request: Request) => {
	try {
		const body = await request.json()
		await new DataBase().connect()

		if (!body.userId || !body.newUser) {
			return new NextResponse(
				"Invalid request body. Please provide 'userId' and 'newUser' properties.",
				{ status: 400 }
			)
		}

		if (!DataBase.validateId(body.userId)) {
			return new NextResponse(JSON.stringify({ message: 'Invalid userId' }), {
				status: 400,
			})
		}

		const user = await DataBase.User.findOneAndUpdate(
			{ _id: body.userId },
			body.newUser,
			{
				new: true,
			}
		)

		if (!user) {
			return new NextResponse(JSON.stringify({ message: 'User not found' }), {
				status: 404,
			})
		}

		await user?.save()
		return new NextResponse(
			JSON.stringify({ message: 'User updated', user: user }),
			{ status: 200 }
		)
	} catch (error: any) {
		return new NextResponse('Error updating a user: ' + error.message, {
			status: 500,
		})
	}
}
