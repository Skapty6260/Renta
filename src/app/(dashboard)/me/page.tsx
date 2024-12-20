'use client'
import {
	Dashboard_Favorites,
	Dashboard_Header,
	Dashboard_MyOffers,
} from '@/components/screens/Dashboard'
import { Loader } from '@/components/shared/loader'
import { useAuthStore } from '@/store'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

export type TDashboardTab = 'Мои объявления' | 'Приобретенные' | 'Избранное'

export default function Dashboard() {
	const { auth_status, user_name, setAuthStatus } = useAuthStore()
	const [activeTab, setActiveTab] = useState<TDashboardTab>('Мои объявления')

	useEffect(() => {
		if (auth_status == false) return redirect('/sign-in')
	}, [auth_status])

	if (auth_status == false)
		return (
			<div className='h-screen w-full flex items-center justify-center'>
				<Loader />
			</div>
		)
	return (
		<div className='flex flex-col bg-gray-200 h-screen'>
			<Dashboard_Header
				name={user_name}
				setAuthStatus={setAuthStatus}
				setTab={setActiveTab}
				activeTab={activeTab}
			/>

			<div className='flex-1 px-[5px] lg:px-[10%] py-[30px] relative'>
				<section className='h-full w-full bg-white rounded-2xl px-[10px] lg:px-[40px] py-[20px]'>
					{activeTab == 'Мои объявления' && <Dashboard_MyOffers />}
					{activeTab == 'Избранное' && <Dashboard_Favorites />}
				</section>
			</div>
		</div>
	)
}
