import { DataBase } from '@/lib/db'
import { NextResponse } from 'next/server'

export const GET = async (request: Request) => {
	try {
		await new DataBase().connect()

		if (request) {
			const params = request.url.split('http://localhost:3000/api/users')

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

				const user = await DataBase.User.findOne({
					_id: params[1].split('=')[1],
				})
				if (!user)
					return new NextResponse(
						JSON.stringify({
							message: `user with that username and password not found.`,
						}),
						{ status: 404 }
					)

				return new NextResponse(JSON.stringify({ user: user }), { status: 200 })
			} else if (params[1].length !== 0 && params[1].includes('&')) {
				const returnWith400 = () =>
					new NextResponse(
						JSON.stringify({
							message: 'Error! Please provide username and password',
						}),
						{ status: 400 }
					)

				const body = params[1].split('&')
				const username = body[0].split('=')[1]
				const password = body[1].split('=')[1]
				if (!username && !password) return returnWith400()

				const user = await DataBase.User.findOne({
					username: username,
					password: password,
				})

				if (!user)
					return new NextResponse(
						JSON.stringify({
							message: `user with that username and password not found.`,
						}),
						{ status: 404 }
					)

				return new NextResponse(JSON.stringify({ user: user }), { status: 200 })
			} else {
				const users = await DataBase.User.find()

				return new NextResponse(JSON.stringify(users), { status: 200 })
			}

			return new NextResponse(
				JSON.stringify(
					`Invalid parameters. You should provide username and password as 2 arguments, or user id as 1 argument`
				),
				{ status: 400 }
			)
		}
	} catch (error: any) {
		return new NextResponse(
			JSON.stringify('Error in fetching user' + error.message),
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
