'use client'
import { LoginForm } from '@/components/screens/Login/form'
import { useAuthStore } from '@/store'
import Config from '@/config/auth'
import { LoginAside } from '@/components/screens/Login/aside'

import styles from '../login.module.scss'

export default function SignIn() {
	const onSubmit = async (username: string, password: string) => {
		const params = await new URLSearchParams({
			username: username,
			password: password,
		})
		const data = await fetch(`/api/users?${params}`)
		console.log(data)
	}

	return (
		<main className={styles.page}>
			<LoginForm
				heading='Log In'
				{...Config.login}
				style={styles.form}
				onSubmit={onSubmit}
				type='sign-in'
			/>

			<LoginAside
				heading='Hello, friend!'
				subheading='Register with your personal details to use all of the site features'
				link='sign-up'
				color={{
					bg: 'bg-blue-700',
					hover: 'hover:bg-blue-700',
				}}
			/>
		</main>
	)
}
