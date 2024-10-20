'use client'
import { useAuthStore } from '@/store'
import { redirect } from 'next/navigation'

export default function Me() {
	// Check for authorization with api client
	// if not authorized, show login/register page, else show user page
	const { auth_status } = useAuthStore()

	if (auth_status == false) return redirect('/sign-in')

	return <div>123</div>
}
