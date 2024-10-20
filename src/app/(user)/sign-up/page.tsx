'use client'
import { LoginForm } from '@/components/screens/Login/form'
import { useAuthStore } from '@/store'
import Config from '@/config/auth'
import { LoginAside } from '@/components/screens/Login/aside'

import styles from '../login.module.scss'

export default function SignUp() {
	return (
		<main className={styles.page}>
			<LoginForm
				heading='Sign Up'
				{...Config.register}
				style={styles.form}
				onSubmit={() => {}}
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
