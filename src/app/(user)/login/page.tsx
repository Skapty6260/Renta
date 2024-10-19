'use client'
import { LoginForm } from '@/components/screens/Login/form'
import { useAuthStore } from '@/store'
import Config from '@/config/auth'
import { LoginAside } from '@/components/screens/Login/aside'

import styles from './login.module.scss'

export default function Login() {
	return (
		<main className={styles.page}>
			<LoginForm
				heading='Log In'
				{...Config.login}
				style={styles.form}
				onSubmit={() => {}}
				type='sign-in'
			/>
			<LoginAside
				heading='Hello, friend!'
				subheading='Register with your personal details to use all of the site features'
				link='sign-up'
			/>
		</main>
	)
}
