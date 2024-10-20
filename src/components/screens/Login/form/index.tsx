import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import Link from 'next/link'
import { useState } from 'react'

interface IProps {
	heading: string
	services: {
		service_name: string
		service_icon: React.ReactNode
	}[]
	fields: {
		placeholder: string
	}[]
	onSubmit: (password: string, userName: string) => void
	type: 'sign-in' | 'sign-up'
	style: any
}

export const LoginForm: React.FC<IProps> = ({
	heading,
	services,
	fields,
	onSubmit,
	type,
	style,
}) => {
	const [password, setPassword] = useState('')
	const [userName, setUserName] = useState('')

	const handleChange = (e: any, field: any) => {
		if (field.type == 'password') {
			setPassword(e.target.value)
		} else {
			setUserName(e.target.value)
		}
	}

	const handleSubmit = () => {
		if (type == 'sign-in') return onSubmit(userName, password)
		else return onSubmit(userName, password)
	}

	return (
		<div className={style}>
			<nav
				className={`flex absolute cursor-pointer -top-[30px] -left-[30px] p-[50px] rounded-full text-2xl text-white ${
					type == 'sign-in'
						? 'bg-blue-600 hover:bg-blue-700'
						: 'bg-indigo-600 hover:bg-indigo-700'
				}`}
			>
				<Link href='/' className='absolute mr-[5px]'>
					<MdOutlineKeyboardBackspace />
				</Link>
			</nav>

			<h2>{heading}</h2>

			<ul className='flex space-x-3'>
				{services.map((service, index) => {
					return (
						<li
							className={`bg-gray-300 p-2 cursor-pointer w-[40px] h-[40px] flex items-center justify-center rounded-xl hover:rounded-lg hover:text-white ${
								type == 'sign-in' ? 'hover:bg-blue-700' : 'hover:bg-indigo-700'
							}`}
							key={index}
						>
							<button type='button'>{service.service_icon}</button>
						</li>
					)
				})}
			</ul>

			<ul>
				{fields.map((field, index) => {
					return (
						<li key={index}>
							<input
								type='text'
								onChange={e => handleChange(e, field)}
								placeholder={field.placeholder}
							/>
						</li>
					)
				})}
			</ul>

			{type == 'sign-in' && (
				<a className='text-gray-600 opacity-70 cursor-pointer hover:underline'>
					Forgot password?
				</a>
			)}
			<button
				className={`${
					type == 'sign-in' ? 'bg-blue-600' : 'bg-indigo-600'
				} w-[200px] py-[8px] mt-[8px] px-[30px] text-white rounded-lg font-semibold hover:rounded-xl ${
					type == 'sign-in' ? 'hover:bg-blue-700' : 'hover:bg-indigo-700'
				}`}
				onClick={handleSubmit}
			>
				{type}
			</button>
		</div>
	)
}
