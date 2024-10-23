'use client'
import { LoginForm } from '@/components/screens/Login/form'
import { useAuthStore } from '@/store'
import Config from '@/config/auth'
import { LoginAside } from '@/components/screens/Login/aside'

import styles from '../login.module.scss'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function SignUp() {
	const { setAuthStatus, setUserName, setUserRole, setUserId, auth_status } =
		useAuthStore()
	const router = useRouter()

	useEffect(() => {
		if (auth_status == true) router.push('/me')
	}, [])

	const onSubmit = async (username: string, password: string) => {
		const res = await fetch('/api/users', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})

		const data = await res.json()

		if (data.user) {
			setTimeout(async () => {
				await setAuthStatus(true)
				await setUserName(data.user.username)
				await setUserId(data.user._id)
				await setUserRole('user')

				router.push('/me')
			}, 2000)
		} else
			alert('Something went wrong. Please try again with different username.')
	}

	return (
		<main className={styles.page}>
			<LoginForm
				heading='Sign Up'
				{...Config.register}
				style={styles.form}
				onSubmit={onSubmit}
				type='sign-up'
			/>

			<LoginAside
				heading='Hello, friend!'
				subheading="Login if you're already registered to access all site features"
				link='sign-in'
				color={{
					bg: 'bg-indigo-700',
					hover: 'hover:bg-indigo-700',
				}}
			/>
		</main>
	)
}
